import React from "react";
import auth from "../../helper/auth.helper";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children, ...rest }) => {
  return auth.isAdmin() ? children : (
    <Navigate to="/unauthorized" />
  );
};

export default PrivateRoute;
