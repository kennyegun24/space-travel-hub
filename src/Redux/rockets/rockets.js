// import { createAsyncThunk } from '@reduxjs/toolkit';

// // const BASE_ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

// // const FETCH_ASYNC_ROCKETS = 'space-travelers-hub/rockets/FETCH_ROCKETS';
// // const FETCH_ROCKETS = 'space-travelers-hub/rockets/FETCH_ROCKETS/fulfilled';
// // const initialState = [];

// const FETCH_ASYNC_ROCKETS = 'space-travel-hub/rockets/FETCH_ROCKETS';
// const FETCH_ROCKETS = 'space-travel-hub/rockets/FETCH_ROCKETS/fulfilled';
// const BASE_ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

// const initialState = [];

// export const fetchRockets = createAsyncThunk(
//   FETCH_ASYNC_ROCKETS,
//   async () => {
//     const response = await fetch(BASE_ROCKET_URL);
//     const data = await response.json();
//     const payload = data.map((eachRocket) => ({
//       id: eachRocket.rocket_id,
//       name: eachRocket.rocket_name,
//       type: eachRocket.rocket_type,
//       description: eachRocket.description,
//       images: eachRocket.flickr_images,
//     }));
//     return payload;
//   },
// );

// const rocketReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_ROCKETS: {
//       return action.payload;
//     }
//     default:
//       return state;
//   }
// };

// export default rocketReducer;
import { createAsyncThunk } from '@reduxjs/toolkit';

// ACTIONS
const FETCH_ASYNC_ROCKETS = 'space-travel-hub/rockets/GET_ROCKETS';
const GET_ROCKETS = 'space-travel-hub/rockets/GET_ROCKETS/rejected';
const BASE_ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';
// DEFAULT BOOKS

const displayRockets = [];

// ACTIONS CREATORS

export const fetchRockets = createAsyncThunk(
  FETCH_ASYNC_ROCKETS,
  async () => {
    const response = await fetch(BASE_ROCKET_URL);
    const data = await response.json();
    const payload = data.map((eachRocket) => ({
      id: eachRocket.rocket_id,
      name: eachRocket.rocket_name,
      type: eachRocket.rocket_type,
      description: eachRocket.description,
      images: eachRocket.flickr_images,
    }));
    return payload;
  },
);

// REDUCERS
const rocketReducer = (state = displayRockets, action) => {
  switch (action.type) {
    case GET_ROCKETS: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default rocketReducer;