import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
  const res = await fetch('http://localhost:3000/api/v1/greetings');
  const data = await res.json();
  console.log(data);
  return data;
});

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: [],
  extraReducers: {
    [getGreetings.pending]: () => {
      console.log('fetching');
    },
    [getGreetings.fulfilled]: (state, action) => {
      console.log('success');
      return [action.payload];
    },
  },
});

export const { greeting } = greetingSlice.actions;

export default greetingSlice.reducer;
