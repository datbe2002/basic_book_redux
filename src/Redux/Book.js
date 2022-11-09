import { createSlice } from "@reduxjs/toolkit";
const Book = createSlice({
    name: "books",
    initialState: {
        books: {
            allBooks: [],
            isFetching: false,
            error: false,
        },
    },
    msg: "",
    reducers: {
        getBooksStart: (state) => {
            state.books.isFetching = true;
        },
        getBooksSuccess: (state, action) => {
            state.books.isFetching = false;
            state.books.allBooks = action.payload;
        },
        getBooksFailed: (state) => {
            state.books.isFetching = false;
            state.books.error = true;
        },

        deleteBookStart: (state) => {
            state.books.isFetching = true;
        },
        deleteBookSuccess: (state) => {
            state.books.isFetching = false;
        },
        deleteBookFailed: (state, action) => {
            state.books.isFetching = false;
            state.books.error = true;
            // state.msg = action.payload;
        }
    }


});

export default Book.reducer;
export const { getBooksStart, getBooksSuccess, getBooksFailed, deleteBookStart, deleteBookFailed, deleteBookSuccess } = Book.actions;