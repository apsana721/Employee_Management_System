import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavbarContainer = () => {
  return (
    <section className='w-[100vw] h-[70px] bg-gray-700 text-white flex justify-between items-center px-4'>
     <Logo/>
     <Menu/>
    </section>
  )
}

export default NavbarContainer
