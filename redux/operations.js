import { createAsyncThunk } from "@reduxjs/toolkit";


export const getAllPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
    if (!response.ok) throw new Error("Unable to fetch posts.");
  
    return response.json();
  };

export const fetchPosts = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = getAllPosts();
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


