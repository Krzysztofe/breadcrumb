import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isOpenRow: null | string;
}

const initialState: InitialState = {
  isOpenRow: null,
};

export const tableBooksSlice = createSlice({
  name: "tableBooks",
  initialState,
  reducers: {
    handleChangeRow: (state, action: PayloadAction<any>) => {
      state.isOpenRow = action.payload;
    },
  },
});

export const { handleChangeRow } = tableBooksSlice.actions;
export default tableBooksSlice.reducer;
