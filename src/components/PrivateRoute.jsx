import { useContext } from 'react';
import { AuthContext } from "../App"

import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children: Children }) => {
    const { isAdmin } = useContext(AuthContext)


    return isAdmin ?
        Children :
        <Navigate to="/login" />
}