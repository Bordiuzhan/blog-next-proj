import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// export const getAllPosts = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com");
  
//     if (!response.ok) throw new Error("Unable to fetch posts.");
  
//     return response.json();
//   };

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const response =await axios.get("/posts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


