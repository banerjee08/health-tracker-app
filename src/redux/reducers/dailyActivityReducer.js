import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dailyActivity:[
        {text: "Running", createdOn: Date.now(), completed: "No"},
        {text: "swimming", createdOn: Date.now(), completed: "Yes"}
    ]
}

// Creating Reducer using Redux Toolkit
const dailyActivitySlice = createSlice({
    name: 'dailyActivity',
    initialState,
    reducers: {
        toggle: (state, action) =>{
            state.dailyActivity = action.payload;
        }
    }
});
 
// export reducer
export const dailyActivityReducer = dailyActivitySlice.reducer;

// export actions
export const dailyActions = dailyActivitySlice.actions