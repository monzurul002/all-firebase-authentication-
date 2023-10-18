import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { useNavigate } from 'react-router-dom';

const EmaiVerify = () => {
    const {user}=useContext(AuthContext)
    const navigate = useNavigate()
    if(user?.emailVerified){
        return navigate("/")
    }
    return (
        <div>
          <h2>Email Verify first.</h2>  
        </div>
    );
};

export default EmaiVerify;