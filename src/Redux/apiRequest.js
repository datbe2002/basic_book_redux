import axios from "axios";

import {

    getBooksStart,
    getBooksSuccess,
    getBooksFailed,
    deleteBookStart,
    deleteBookSuccess,
    deleteBookFailed
} from "./Book";

// export const loginUser = async (user, dispatch, navigate) => {
//   dispatch(loginStart());
//   try {
//     const res = await axios.post("http://localhost:8000/api/login", user);

//     dispatch(loginSuccess(res.data));

//     if (res.data.user?.role === "Admin") {
//       navigate("/");
//     } else {
//       navigate("/user");
//     }
//   } catch (err) {
//     dispatch(loginFailed(err.response.data));
//   }
// };

// export const registerUser = (user, dispatch, navigate) => {
//   dispatch(registerStart());

//   axios
//     .post("http://localhost:8000/api/register", user)
//     .then(() => dispatch(registerSuccess()), navigate("/login"))
//     .catch((err) => dispatch(registerFailed(err.response.data.message)));
// };

export const getAllBooks = async (dispatch) => {
    dispatch(getBooksStart());
    try {
        const res = await axios.get('https://6362307666f75177ea28c41b.mockapi.io/books');
        console.log(res.data);

        dispatch(getBooksSuccess(res.data));
    } catch (err) {
        dispatch(getBooksFailed());
    }
};

export const deleteBook = async (id, dispatch) => {
    dispatch(deleteBookStart());
    try {
        const res = await axios.delete(`https://6362307666f75177ea28c41b.mockapi.io/books/${id}`);
        dispatch(deleteBookSuccess(res.data));
        console.log(res.data);
        getAllBooks(dispatch);
    } catch (error) {
        dispatch(deleteBookFailed(error.response.data));
    }
};

