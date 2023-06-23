import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  page: number;
  rowsPerPage: number
}

const initialState: InitialState = {
  page: 0,
  rowsPerPage: 5
};

export const tableBooksSlice = createSlice({
  name: "tableBooks",
  initialState,
  reducers: {
    handleChangeTablePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    handleChangeTableRowsPerPage: (state, action: PayloadAction<number>) => {
      state.rowsPerPage = action.payload;
    },
  },
});

export const { handleChangeTablePage, handleChangeTableRowsPerPage } =
  tableBooksSlice.actions;
export default tableBooksSlice.reducer;
