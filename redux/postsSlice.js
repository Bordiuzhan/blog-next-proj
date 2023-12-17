'use client';

import { createSlice } from '@reduxjs/toolkit';
import { addPost, fetchPosts } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, handlePending)
      .addCase(addPost.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addPost.rejected, handleRejected)
      .addCase(fetchPosts.pending, handlePending)
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, handleRejected);
  },
});

export const postsReducer = postsSlice.reducer;
