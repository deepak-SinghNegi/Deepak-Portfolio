import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import GitHub from '../assets/GitHub.png'
import leatcode from '../assets/leetcode.svg'
 const button_array = [
  { label: "GitHub", icon: GitHub, className: "p-3" },
  { label: "LeetCode", icon: leatcode, className: "p-3" },
];
const Home = () => {
  return (
    <div className='flex flex-col gap-25 '>
      <Navbar/>
      <div className='lg:ml-52 md:ml-32 md:flex md:justify-start flex justify-center flex-col gap-8'><div><strong className=' h-22  bg-gradient-to-r from-blue-400    via-purple-500 to-indigo-600
         bg-clip-text text-7xl text-transparent '>Deepak Singh Negi</strong></div>
        <div> 
          <strong className='text-white text-6xl '>Computer Science Student  
          </strong>
        </div>
        <div> 
          <strong className='text-white text-4xl '>Aspiring Software Developer  
          </strong>
        </div>
        <div className=''> 
          <p className='text-white text-2xl inline-block border-b-2 border-b-indigo-600'>“Exploring the world of Java, DSA, and full-stack development — one project at a time.”
          </p>
        </div>
      </div>
     <div className='w-full flex justify-center '><Button buttons={button_array} showIcons /></div>
    </div>

  )
}

export default Home