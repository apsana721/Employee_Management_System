import React, { useContext } from 'react'
import { AuthUserContext } from './AuthContextApi'
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({children}) => {
let {authUser}=useContext(AuthUserContext);

if(authUser!==null){
    return <Navigate to={"/"}/>
}else{
    return <>{children}</>
}
}

export default PublicRoutes