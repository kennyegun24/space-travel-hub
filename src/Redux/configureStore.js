import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';

const allReducers = combineReducers({
  rockets: rocketReducer,
});

const store = configureStore({ reducer: allReducers }, applyMiddleware(thunk));

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import rockets from './rockets/rockets';

// const store = configureStore({
//   reducer: {
//     rockets,
//   },
// });

// export default store;
