import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  bookId: string;
}

const initialState: InitialState = {
  bookId: "",
};

export const tableBooksSlice = createSlice({
  name: "tableBooks",
  initialState,
  reducers: {
    handleGetBookId: (state, action: PayloadAction<any>) => {
      state.bookId = action.payload;
    },
  },
});

export const { handleGetBookId } = tableBooksSlice.actions;
export default tableBooksSlice.reducer;
