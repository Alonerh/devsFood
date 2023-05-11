import React from 'react';
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const RequireAuth = ({ children })=>{
    const token = useSelector(state=>state.user.token);

    if (token !== '' | token) {
        return children;
    } else {
        return <Navigate to='/'/>
    }
}