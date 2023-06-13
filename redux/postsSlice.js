"use client";

import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts} from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchPosts.pending]: handlePending,
    [fetchPosts.fulfilled](state, action) {   
      state.isLoading = false;
      state.error = null;
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: handleRejected,
  },
});

export const postsReducer = postsSlice.reducer;
