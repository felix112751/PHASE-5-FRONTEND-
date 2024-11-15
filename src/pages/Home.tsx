import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Book, Users, BookOpen } from 'lucide-react';
import { RootState } from '../store';

const Home: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const handleAction = (action: string) => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    switch (action) {
      case 'join':
        navigate('/clubs');
        break;
      case 'discuss':
        navigate('/clubs');
        break;
      case 'track':
        navigate('/profile');
        break;
    }
  };

  
export default Home;