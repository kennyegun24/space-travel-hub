import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';
// DEFAULT
const initialState = {
  rockets: [],
  status: null,
};

// ACTIONS CREATORS
export const fetchRockets = createAsyncThunk(
  'fetch',
  async () => {
    const response = await fetch(BASE_ROCKET_URL);
    const data = await response.json();
    return data;
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        const isPending = state;
        isPending.status = 'pending';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = 'fulfilled';
        isFulfilled.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state) => {
        const isRejected = state;
        isRejected.status = 'rejected';
      });
  },
});

export default rocketSlice.reducer;
