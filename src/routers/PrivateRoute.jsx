import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import {  Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);
    const location = useLocation()
    if(user){
        return children
    }
console.log(location);
    return <Navigate to="/login" state={{from:location}}  replace></Navigate>
};

export default PrivateRoute;