import React from 'react'
import EMSLogo from "../assets/EMS-Logo.png"

const Logo = () => {
  return (
    <aside className='w-[150px] h-[70px] flex justify-center items-center'>
      <img src={EMSLogo} alt="EMS-LOGO" 
      className='w-[140px] h-[65px] '/>
    </aside>
  )
}

export default Logo
