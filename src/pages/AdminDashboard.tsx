import React from 'react';
import { useSelector } from 'react-redux';
import { Users, BookOpen, BarChart2 } from 'lucide-react';
import { RootState } from '../store';

const AdminDashboard: React.FC = () => {
  const { bookClubs } = useSelector((state: RootState) => state.bookClubs);
  const { summaries } = useSelector((state: RootState) => state.books);

  const totalMembers = bookClubs.reduce((acc, club) => acc + club.members.length, 0);
  const totalBooks = bookClubs.reduce((acc, club) => acc + (club.currentBook ? 1 : 0), 0);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Total Members</h3>
          <p className="text-3xl font-bold text-gray-900">{totalMembers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Active Books</h3>
          <p className="text-3xl font-bold text-gray-900">{totalBooks}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BarChart2 className="h-8 w-8 text-indigo-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Book Summaries</h3>
          <p className="text-3xl font-bold text-gray-900">{summaries.length}</p>
        </div>
