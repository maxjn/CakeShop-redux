import { createSlice } from "@reduxjs/toolkit";

//initialState
const initialState = {
  numOfCakes: 10,
};
//create slice
const cakeSlice = createSlice({
  name: "cake", //slice name
  initialState, //initial state
  reducers: {
    //reducers
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

//exporting reducers and actions
export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
