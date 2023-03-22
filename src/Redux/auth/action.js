
import axios from "axios";
import { Navigate } from "react-router-dom";

import { AUTH_GETUSER_ERROR, AUTH_GETUSER_LOADING, AUTH_GETUSER_SUCCESS, AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_ERROR, AUTH_SIGNUP_LOADING, AUTH_SIGNUP_SUCCESS } from "./actiontype";

export const loginAPI = (creds) => async (dispatch) => {
    dispatch({type:AUTH_LOGIN_LOADING})
  try {
    let res = await axios.post("http://localhost:8080/login", creds);
    dispatch({
       
      type: AUTH_LOGIN_SUCCESS,
      payload: res.data,
      
    });
    
  } catch (e) {
    console.log(e);
    dispatch({
      type: AUTH_LOGIN_ERROR,
    });
  }
};

export const logoutAPI = () => ({ type: AUTH_LOGOUT });



export const signupAPI = (creds) => async (dispatch) => {
  console.log("signupaction")
  dispatch({type:AUTH_SIGNUP_LOADING})
try {
  let res = await axios.post("http://localhost:8080/users/signup", creds);
  dispatch({
     
    type: AUTH_SIGNUP_SUCCESS,
    payload: res.data,
  });
} catch (e) {
  console.log(e);
  dispatch({
    type: AUTH_SIGNUP_ERROR,
  });
}
};


export const getuserAPI = () => async (dispatch) => {
  console.log("getuseraction")
  dispatch({type:AUTH_GETUSER_LOADING})
try {
  let res = await axios.get("http://localhost:8080/users");
  dispatch({
     
    type: AUTH_GETUSER_SUCCESS,
    payload: res.data,
  });
} catch (e) {
  console.log(e);
  dispatch({
    type: AUTH_GETUSER_ERROR,
  });
}
};