import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import { RootState } from '../store';

const Layout: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar />
    </div>
  );
};

export default Layout;