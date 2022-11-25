import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const action = 'missions/fetchMissions';

export const fetchMissions = createAsyncThunk(action, async () => {
  try {
    const resp = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await resp.json();
    const customData = data.map((mission) => ({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
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
        if (mission.mission_id === action.payload) {
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
