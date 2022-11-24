import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const action = 'missions/fetchMissions';

export const fetchMissions = createAsyncThunk(action, async () => {
  try {
    const resp = await axios.get('https://api.spacexdata.com/v3/missions');
    const customData = resp.data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      member: false,
    }));

    return customData;
  } catch (error) {
    console.error(error);
  }
  return [];
});

const initialState = {
  missionsArray: [],
  loading: null,
  error: '',
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleMember: (state, action) => {
      const newState = state.missionsArray.map((mission) => {
        if (mission.id === action.payload) {
          const objChanged = { ...mission, member: !mission.member };
          return objChanged;
        }
        return mission;
      });
      return { ...state, missionsArray: newState };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      const newState = state;
      newState.loading = true;
    });
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      const newState = state;
      newState.missionsArray = action.payload;
      newState.loading = false;
    });
    builder.addCase(fetchMissions.rejected, (state, action) => {
      const newState = state;
      newState.loading = false;
      newState.missionsArray = [];
      newState.error = action.error.message;
    });
  },
});

export const { toggleMember } = missionSlice.actions;

export default missionSlice.reducer;
