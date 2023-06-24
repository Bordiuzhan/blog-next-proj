import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL=process.env.BASE_URL

axios.defaults.baseURL = BASE_URL;
// export const getAllPosts = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com");
  
//     if (!response.ok) throw new Error("Unable to fetch posts.");
  
//     return response.json();
//   };

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const response =await axios.get("/api/posts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


