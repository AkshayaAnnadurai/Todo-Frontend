import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import React from "react";
const RequireAuth = ({ children }) => {
  const isAuth = useSelector((store) => store.authReducer.token);
  const { pathname } = useLocation();
  if (isAuth) {
    return children;
  } else {
    return (
      // Redirecting to Login page
      <Navigate
        to="/login"
        state={{ from: pathname }}
        replace
      />
    );
  }
};

export default RequireAuth;



