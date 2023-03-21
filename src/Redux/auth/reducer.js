import { AUTH_GETUSER_ERROR, AUTH_GETUSER_LOADING, AUTH_GETUSER_SUCCESS, AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_ERROR, AUTH_SIGNUP_LOADING, AUTH_SIGNUP_SUCCESS } from "./actiontype";

  let token = localStorage.getItem("token") || [];
  const initialState = {
    token: token,
    loading: false,
    error: false,
  };
 
  //LOGIN REDUCER

  export const authReducer = (state = initialState, { type, payload }) => {

    switch (type) {
      case AUTH_LOGIN_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
    case AUTH_LOGIN_SUCCESS: {
        localStorage.setItem("token", payload.token);
        alert("Login Successful")
       
        return {
          ...state,
          loading: false,
          error: false,
          token: payload.token
         
        };
        
      }
      case AUTH_LOGIN_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case AUTH_LOGOUT: {
        localStorage.removeItem("token");
        return {
          ...state,
          loading: false,
          error: false,
          token: "",
        };
      }
  
      default: {
        return state;
      }
    }
  };

//SIGNUP REDUCER

  export const signupReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case AUTH_SIGNUP_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
    case AUTH_SIGNUP_SUCCESS: {
        localStorage.setItem("token", payload.token);
        alert("Register Successful")
        return {
          ...state,
          loading: false,
          error: false,
          token: payload.token
        };
      }
      case AUTH_SIGNUP_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
     
      default: {
        return state;
      }
    }
  }


  //GETUSER REDUCER

  export const getuserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case AUTH_GETUSER_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
    case AUTH_GETUSER_SUCCESS: {
       
      
        return {
          ...state,
          loading: false,
          error: false,
         
        };
      }
      case AUTH_GETUSER_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
     
      default: {
        return state;
      }
    }
  }