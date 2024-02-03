// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

import { configureStore } from "@reduxjs/toolkit";
import { addActivityReducer } from "../redux/reducers/addActivityReducer";
import { dailyActivityReducer } from "../redux/reducers/dailyActivityReducer";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export const store = configureStore({
    reducer:{
        addActivityReducer,
        dailyActivityReducer
    }
});