import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BookOpen, Users, Star, MessageSquare, Plus, Check } from 'lucide-react';
import { RootState } from '../store';
import { addSummary, addReview } from '../store/slices/bookSlice';
import { updateBookClubBooks } from '../store/slices/bookClubSlice';
import MemberList from '../components/MemberList';
import AddBookModal from '../components/AddBookModal';

const BookClubDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const club = useSelector((state: RootState) => 
    state.bookClubs.bookClubs.find(club => club.id === id)
  );
  const { user } = useSelector((state: RootState) => state.auth);
  const [summary, setSummary] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [showMembers, setShowMembers] = useState(false);
  const [showAddBookModal, setShowAddBookModal] = useState(false);

  if (!club) return <div>Club not found</div>;

  const handleSubmitSummary = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !club.currentBook) return;

    dispatch(addSummary({
      id: Math.random().toString(36).substr(2, 9),
      bookId: club.currentBook.id,
      userId: user.id,
      clubId: club.id,
      content: summary,
      createdAt: new Date().toISOString(),
    }));
    setSummary('');
  };


  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    dispatch(addReview({
      id: Math.random().toString(36).substr(2, 9),
      rating,
      comment,
      userId: user.id,
      clubId: club.id,
      createdAt: new Date().toISOString(),
    }));
    setComment('');
    setRating(5);
  };
