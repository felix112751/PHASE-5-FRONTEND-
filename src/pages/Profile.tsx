import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BookOpen, Users, Library, Star, UserCircle, Plus, Heart, Mail, X, Check, Camera } from 'lucide-react';
import { RootState } from '../store';
import MemberList from '../components/MemberList';
import AddBookModal from '../components/AddBookModal';
import { markAsRead } from '../store/slices/bookSlice';
import { setUser } from '../store/slices/authSlice';

const Profile: React.FC = () => {
  const { user, following, followers } = useSelector((state: RootState) => state.auth);
  const { userBooks, currentlyReading } = useSelector((state: RootState) => state.books);
  const { userBookClubs } = useSelector((state: RootState) => state.bookClubs);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [addBookType, setAddBookType] = useState<'reading' | 'read'>('reading');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleMarkAsRead = (bookId: string) => {
    dispatch(markAsRead(bookId));
  };

  const openAddBookModal = (type: 'reading' | 'read') => {
    setAddBookType(type);
    setShowAddBookModal(true);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && user) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        dispatch(setUser({ ...user, avatar: base64String }));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) return null;

  

export default Profile;