import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = process.env.BASE_URL;

axios.defaults.baseURL = BASE_URL;

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/posts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addPost = createAsyncThunk(
  'posts/addPost',
  async (post, thunkAPI) => {
    console.log("REDUX OPER",post);
    try {
      const response = await axios.post('/api/posts', post);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
