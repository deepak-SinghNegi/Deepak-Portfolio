import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import manuIcon from '../assets/manu.svg'

const NavBar = () => {
  const[manu , setManu] = useState(false);
  const handleClick = ()=>{
      setManu(prev =>!prev);
  }
  return (
    <nav className='p-10 text-center  md:flex md:justify-between'>
      <div className='fixed left-1 top-10 md:hidden '>
    <img onClick={handleClick} src={manuIcon} alt="" />
      </div>
      {/* image  */}
        <div>
            <img  src="" alt="" />
        </div>
        {
          manu && <DropBox/>
        }
        <div className=' bg-white/10 p-3 rounded-full hidden md:block text-white md:flex gap-12  md:gap-15'>
              <Link to="/">Home</Link>
              <Link to="/about">About me</Link>
              <Link to="/resume">Resume</Link>
              
              <Link to="/projects">Projects</Link>
        </div>
        <div className='hidden md:block text-white'>
          <Link to="/contact">Contact me</Link>
        </div>
    </nav>
  )
}

const DropBox = ()=>{
  return(
          <div className=' bg-[#1E293B]  left-1 fixed top-25  text-white flex flex-col gap-12 '>
              <Link to="/">Home</Link>
              <Link to="/about">About me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact me</Link>
              <Link to="/projects">Projects</Link>
        </div>
  )
}

export default NavBar