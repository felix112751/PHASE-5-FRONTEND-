import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book, BookSummary, Review } from '../../types';

interface BookState {
  books: Book[];
  userBooks: Book[];
  currentlyReading: Book[];
  summaries: BookSummary[];
  reviews: Review[];
  loading: boolean;
}

// Initial sample books
const initialBooks: Book[] = [
    {
      id: '1',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80',
      description: 'Between life and death there is a library...',
    },
    {
      id: '2',
      title: 'The Thursday Murder Club',
      author: 'Richard Osman',
      coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80',
      description: 'Four unlikely friends meet weekly to solve cold cases...',
    }
  ];