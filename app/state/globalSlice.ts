// app/state/globalSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
  value: string;
}

const initialState: GlobalState = {
  value: "",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;