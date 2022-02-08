// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isLoading: false,
//   isAuth: false,
//   error: "",
// };

// const loginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {
//     loginPending: (state) => {
//       state.isLoading = true;
//     },
//     loginSuccess: (state) => {
//       state.isLoading = false;
//       state.isAuth = true;
//       state.error = "";
//     },
//     loginFail: (state, { payload }) => {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

// const { reducer, actions } = loginSlice;

// export const { loginPending, loginSuccess, loginFail } = actions;

// export default reducer;

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  error: ''
}

const authenticationSlice = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return [...state, state.isLoading = true, action.payload,]
    case LOGIN_SUCCESS:
      return [...state, action.payload]
    case LOGIN_FAILED:
      return [...state, action.payload]
  }
  return state
}

export default authenticationSlice