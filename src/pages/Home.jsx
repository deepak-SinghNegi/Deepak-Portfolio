import React from 'react'
import Navbar from '../components/Navbar'

const AboutMe = () => {
  return (
    <div className='flex flex-col gap-25'><Navbar
      bgColor="transperant" />
      <div className=' ml-52 flex justify-start flex-col gap-8'><div><strong className=' h-22  bg-gradient-to-r from-blue-400    via-purple-500 to-indigo-600
         bg-clip-text text-7xl text-transparent '>Deepak Singh Negi</strong></div>
        <div> 
          <strong className='text-white text-7xl '>Computer Science Student | <br />Aspiring Software Developer
          </strong>
        </div>
        <div> 
          <p className='text-white '>“Exploring the world of Java, DSA, and full-stack development — one project at a time.”
          </p>
        </div>
      </div>
    </div>

  )
}

export default AboutMe