import React, { useContext } from 'react'
import { AuthUserContext } from './AuthContextApi'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({children}) => {
 let {authUser}=useContext(AuthUserContext);

 if(authUser===null){
    return <Navigate to={"/auth/login"}/>
 }else{
    return <>{children}</>
 }
}

export default ProtectedRoutes