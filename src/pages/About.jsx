import React from 'react'
import profilePhoto from '../assets/profilePhoto.png'

const About = () => {
  return (
    <div className='h-full flex justify-between '>
      <div className='  text-white  rounded-2xl   p-10 grid grid-cols-2 w-4/5'>
        <div className='bg-white/10 m-3 p-3 rounded-2xl'>
          <p className='text-4xl font-black mb-2'>Technical Focus</p>
          <p className='font-mono text-xl'>Java, Spring Boot, REST APIs, MongoDB, MySQL
            Designing scalable backend systems.</p>
        </div>
        <div className='bg-white/10 m-3 p-3 rounded-2xl'>
          <p className='text-4xl font-black mb-2'>What I Practice</p>
          <p className='font-mono text-xl'> LeetCode problems ,
            Strong in Data Structures & OOP ,backend developmen</p>
        </div>

        <div className='bg-white/10 m-3 p-3 rounded-2xl'>
          <p className='text-4xl font-black mb-2'>Core Technologies</p>
          <p className='font-mono text-xl'>HTML-5 , CSS , Tailwind , Java Script , React , MongoDB , MySql , Git , GitHub , java , Spring Boot </p>
        </div>
        <div className='bg-white/10 m-3 p-3 rounded-2xl'>
          <p className='text-4xl font-black mb-2'>What I Bring</p>
          <p className='font-mono text-xl'>Problem-solving discipline
            Backend-first thinking
            Ability to contribute to real-world codebases</p>
        </div>

      </div>
      <div className=' h-60 w-60 rounded-full'>
        <img className='rounded-full  h-full w-full' src={profilePhoto} alt="" /></div>
    </div>
  )
}

export default About