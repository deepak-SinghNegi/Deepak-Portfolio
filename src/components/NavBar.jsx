import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import manuIcon from '../assets/manu.svg'
import closeIcon from '../assets/close.svg'


const NavBar = () => {
  const [manu, setManu] = useState(false);
  const handleClick = () => {
    setManu(prev => !prev);
  }
  return (
    <nav className='p-10  md:flex md:items-center md:justify-center'>
      <div className=' fixed right-10 top-8 md:hidden  '>
        {
          manu && <DropBox val = {setManu}/>
        }
        <img className="fixed top-6 right-6 z-[100] md:hidden h-10" onClick={handleClick} src={!manu ? manuIcon : closeIcon} alt="" />
      </div>
      {/* image  */}
      
        
      <div className='  bg-white/10 p-3 rounded-full hidden  text-white md:flex gap-12  md:gap-15'>

        <Link className='text-center h-full w-30 p-2 hover:bg-white/20 hover:backdrop-blur-md rounded-full' to="/">Home</Link>
        <Link className='  text-center h-full w-30 p-2 hover:bg-white/20 hover:backdrop-blur-md rounded-full' to="/about">About me</Link>
        <Link className='  text-center h-full w-30 p-2 hover:bg-white/20 hover:backdrop-blur-md rounded-full' to="/resume">Resume</Link>

        <Link className='text-center h-full w-30 p-2 hover:bg-white/20 hover:backdrop-blur-md rounded-full' to="/projects">Projects</Link>
      </div>
      <div className='hidden md:flex text-white bg-white/10 p-3 rounded-full absolute right-5'>
      
        <Link className=' text-center  h-full w-30 p-2 hover:bg-white/20 hover:backdrop-blur-md rounded-full' to="/contact">Contact me</Link>
      </div>
    </nav>
  )
}

const DropBox = (setManu) => {
  
  const removeDropBox = ()=>{
    setManu(false);
  }
  return (
    <>
      <div className=" text-4xl fixed inset-0 text-white flex flex-col items-center justify-center gap-10  md:hidden bg-white/85">

        <Link onClick = {removeDropBox} className='  text-black  p-2 ' to="/">Home</Link>
        <Link onClick = {removeDropBox} className='  text-black   p-2 ' to="/about">About me</Link>
        <Link onClick = {removeDropBox} className='  text-black  p-2' to="/resume">Resume</Link>

        <Link onClick = {removeDropBox}  className=' text-black  p-2' to="/projects">Projects</Link>
      
      
        <Link onClick = {removeDropBox} className=' text-black   p-2 ' to="/contact">Contact me</Link>
      </div>
    </>
  )
}

export default NavBar