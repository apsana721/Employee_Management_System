import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthUserContext } from '../context/AuthContextApi'

const Menu = () => {
    // ! use the context
    let {authUser,logout}=useContext(AuthUserContext);

    // !Authenticated user ->Add User, Profile, Logout
let AuthenticatedUser=()=>{
    return ( <>
      <li>
            <NavLink to={"/add-user"} className={({isActive})=>`${isActive ? "bg-blue-600":""} px-4 py-2 rounded-md cursor-pointer font-semibold hover:bg-blue-700 text-lg`}>Add User</NavLink>
        </li>
        <li>
            <NavLink to={"/profile"} className={({isActive})=>`${isActive ? "bg-blue-600":""} px-4 py-2 rounded-md cursor-pointer font-semibold hover:bg-blue-700 flex items-center gap-3 text-lg`}>
            <span>
                {authUser?.displayName}
            </span>
            <span>
                <img src={authUser?.photoURL} alt="Profile_Photo"  className='w-[25px] h-[25px] rounded-full'/>
            </span>
            </NavLink>
        </li>
        <li>
            <button className='px-4 py-2 rounded-md text-lg cursor-pointer font-semibold  ' onClick={logout}>
                Logout
            </button>
        </li>
        
    </>
    )
}
    // !Anonymous User ->Login , Register
let AnonymousUser=()=>{
    return ( <>
    
         <li>
            <NavLink to={"/auth/login"} className={({isActive})=>`${isActive ? "bg-blue-600":""} px-4 py-2 rounded-md cursor-pointer font-semibold hover:bg-blue-700 text-lg`}>Login</NavLink>
        </li>
        <li>
           <NavLink to={"/auth/register"} 
           className={({isActive})=>`${isActive ? "bg-blue-600":""} px-4 py-2 rounded-md cursor-pointer font-semibold hover:bg-blue-700 text-lg`}>Register</NavLink>
        </li>
    
    </>
    )
}
  return (
    <aside className='w-[500px] h-[70px] flex justify-evenly items-center'>
     <ul className='w-full h-[70px] flex justify-evenly items-center'>
        <li>
            <NavLink to={"/"} className={({isActive})=>`${isActive ? "bg-blue-600":""} px-4 py-2 rounded-md cursor-pointer font-semibold hover:bg-blue-700 text-lg`}> Home</NavLink>
        </li>
        {authUser==null? <AnonymousUser/>:<AuthenticatedUser/>}
     </ul>
    </aside>
  )
}

export default Menu
