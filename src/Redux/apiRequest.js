import axios from "axios";

import {
  getBooksStart,
  getBooksSuccess,
  getBooksFailed,
  deleteBookStart,
  deleteBookSuccess,
  deleteBookFailed,
  addNewBookStart,
  addNewBookSuccess,
  addNewBookFailed,
  updateBookStart,
  updateBookFailed,
  updateBookSuccess,
} from "./Book";

export const getAllBooks = async (dispatch) => {
  dispatch(getBooksStart());
  try {
    const res = await axios.get(
      "https://6362307666f75177ea28c41b.mockapi.io/books"
    );
    console.log(res.data);

    dispatch(getBooksSuccess(res.data));
  } catch (err) {
    dispatch(getBooksFailed());
  }
};

export const addNewBook = async (dispatch, newObject, nav) => {
  dispatch(addNewBookStart());
  try {
    const res = await axios.post(
      "https://6362307666f75177ea28c41b.mockapi.io/books",
      {
        image: newObject.image,
        bookName: newObject.bookName,
        quantity: newObject.quantity,
        description: newObject.description,
      }
    );
    console.log(res.data);

    dispatch(addNewBookSuccess(res.data));
    getAllBooks(dispatch);
    nav("/dashboard");
  } catch (err) {
    dispatch(addNewBookFailed());
  }
};

export const updateBook = async (dispatch, newObject) => {
  dispatch(updateBookStart());
  try {
    const res = await axios.put(
      `https://6362307666f75177ea28c41b.mockapi.io/books/${newObject.id}`,
      {
        image: newObject.image,
        bookName: newObject.bookName,
        quantity: newObject.quantity,
        description: newObject.description,
      }
    );
    console.log(res.data);

    dispatch(updateBookSuccess(res.data));
    getAllBooks(dispatch);
  } catch (err) {
    dispatch(updateBookFailed());
  }
};

export const deleteBook = async (id, dispatch) => {
  dispatch(deleteBookStart());
  try {
    const res = await axios.delete(
      `https://6362307666f75177ea28c41b.mockapi.io/books/${id}`
    );
    dispatch(deleteBookSuccess(res.data));
    console.log(res.data);
    getAllBooks(dispatch);
  } catch (error) {
    dispatch(deleteBookFailed(error.response.data));
  }
};
