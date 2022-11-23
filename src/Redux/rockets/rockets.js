import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  status: null,
};

export const fetchRockets = createAsyncThunk('rockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  return data;
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    rocketBooking: (state, action) => {
      const myState = state;
      const newState = myState.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
      myState.rockets = newState;
    },
  },
  extraReducers(reduce) {
    reduce
      .addCase(fetchRockets.pending, (state) => {
        const isPending = state;
        isPending.status = 'pending';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = 'fulfilled';

        const rocketData = [];
        action.payload.map((rocket) => rocketData.push({
          id: rocket.id,
          rocketName: rocket.rocket_name,
          rocketDesc: rocket.description,
          rocketImages: rocket.flickr_images[0],
          reserved: false,
        }));
        console.log(rocketData);
        isFulfilled.rockets = rocketData;
      })
      .addCase(fetchRockets.rejected, (state) => {
        const isRejected = state;
        isRejected.status = 'rejected';
      });
  },
});

export default rocketSlice.reducer;

export const { rocketBooking } = rocketSlice.actions;
