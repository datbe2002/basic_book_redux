import React from 'react'
// import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { UserAuth } from '../AuthContext';
const PrivateRoute = () => {
    const { user } = UserAuth();
    // alert(user.auth)
    return (
        user ? <Outlet /> : <Navigate to='/dashboard' />
    )
}

export default PrivateRoute