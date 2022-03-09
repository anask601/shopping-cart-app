import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

// for (let i = 100; i <= 2000; i++) {
//   if (i % 4 === 0 && i % 100 !== 0) {
//     console.log(`it's a leep year ${i}`);
//   } else if (i % 400 === 0) {
//     console.log(`it's a leep year ${i}`);
//   }
// }
