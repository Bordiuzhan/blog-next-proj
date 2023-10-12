'use client';
import { createSelector } from '@reduxjs/toolkit';

export const selectPosts = (state) => state.posts.posts;

export const selectFilter = (state) => state.filter;

export const selectIsLoading = (state) => state.posts.isLoading;

export const selectError = (state) => state.posts.error;

export const selectPostById = createSelector(
  [selectPosts, (state, postId) => postId],
  (posts, postId) => posts.find((post) => post._id === postId)
);

export const selectVisiblePosts = createSelector(
  [selectPosts, selectFilter],
  (posts, filters) => {
    const normalizedFilter = filters.toLowerCase();
    if (posts.length === 0) {
      return [];
    }
    return posts
      .filter(({ title }) => title.toLowerCase().includes(normalizedFilter))
      .reverse();
  }
);
