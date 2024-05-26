import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("getusers", async (x, y) => {
  const { rejectWithValue } = y;

  try {
    const data = await axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/uscdnskjcdsers",
    });
    return data.data;
  } catch (er) {
    return rejectWithValue(er);
  }
});

const usersData = {};

const UserSlice = createSlice({
  name: "users",
  initialState: usersData,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, () => {
      console.log("pending");
    });
    builder.addCase(getUsers.fulfilled, (x, action) => {
      console.log(action);
    });
    builder.addCase(getUsers.rejected, (x, action) => {
      console.log(action);
    });
  },
});

export const users = UserSlice.reducer;
