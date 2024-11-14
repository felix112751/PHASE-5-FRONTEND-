import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserPlus, UserMinus, BookOpen } from 'lucide-react';
import { useUserStore } from '../store/userStore';
import type { User } from '../types';
interface UserCardProps {
  user: User;
  isFollowing: boolean;
}
export default function UserCard({ user, isFollowing }: UserCardProps) {
  const navigate = useNavigate();
  const { followUser, unfollowUser } = useUserStore();
  const handleFollowToggle = () => {
    if (isFollowing) {
      unfollowUser(user.id);
    } else {
      followUser(user.id);
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-medium text-gray-900">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.bio}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4" />
            <span>{user.booksRead.length} books read</span>
          </div>