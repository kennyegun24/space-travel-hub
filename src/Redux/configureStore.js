import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const allReducers = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,
});

const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
