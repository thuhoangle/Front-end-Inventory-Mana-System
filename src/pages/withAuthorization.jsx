import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuthorization = (WrappedComponent, allowedRoles) => {
  return (props) => {
    const userType = localStorage.getItem('user_type');
    console.log("User type:", userType);
    console.log("Allowed roles:", allowedRoles);
    console.log("User type in allowedRoles:", allowedRoles.includes(userType));

    if (allowedRoles.includes(userType)) {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to="/warning" />;
    }
  };
};

export default withAuthorization;
