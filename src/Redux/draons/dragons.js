import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragon: [],
  status: null,
};

export const fetchDragons = createAsyncThunk('dragons', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/dragons');
  const data = await response.json();
  return data;
});

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    dragonBooking: (state, action) => {
      const myState = state;
      const newState = myState.dragon.map((rock) => {
        if (rock.id !== action.payload) {
          return rock;
        }
        return { ...rock, reserved: !rock.reserved };
      });
      myState.dragon = newState;
    },
  },
  extraReducers(reduce) {
    reduce
      .addCase(fetchDragons.pending, (state) => {
        const isPending = state;
        isPending.status = 'pending';
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = 'fulfilled';

        const dragonData = [];
        action.payload.map((drag) => dragonData.push({
          id: drag.id,
          dragonName: drag.name,
          dragonType: drag.type,
          dragonImage: drag.flickr_images,
          reserved: false,
        }));
        isFulfilled.dragon = dragonData;
      })
      .addCase(fetchDragons.rejected, (state) => {
        const isRejected = state;
        isRejected.status = 'rejected';
      });
  },
});

export default dragonSlice.reducer;

export const { dragonBooking } = dragonSlice.actions;
