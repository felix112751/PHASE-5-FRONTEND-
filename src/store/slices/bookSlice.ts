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