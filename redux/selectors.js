"use client"
import { createSelector } from '@reduxjs/toolkit';

export const selectPosts = state => state.posts.posts;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.posts.isLoading;

export const selectError = state => state.posts.error;

export const selectVisiblePosts = createSelector(
    [selectPosts, selectFilter],
    (posts, filters) => {
      const normalizedFilter = filters.toLowerCase();
      if (posts === []) {
        return;
      }
      return posts.filter(({title}) =>
        title.toLowerCase().includes(normalizedFilter)
      );
    }
  );