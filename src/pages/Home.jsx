import React from 'react'
import linkedInImg from '../assets/linkedin.png'
import gitIcon from '../assets/social.png'
import leetCodeIcon from '../assets/leetCode.png'


const Home = () => {
  return (
    <div >
      
      <div className='text-center '>
        <div><strong className='font-bold   md:text-8xl text-5xl bg-linear-to-r 
               from-purple-400 
               via-pink-500 
               to-red-500 
               bg-clip-text 
               text-transparent '>Deepak Singh Negi </strong></div>
        <div className="text-xl md:text-4xl text-white/70 mt-6">
          B.Tech Computer Science Student

        </div>
        <div className='text-white/70'>| Java & Backend Developer</div>
        <div className='md:text-xl text-xs mt-6 text-white/70'>
          Focused on mastering Data Structures, <br />System Design, and building scalable backend applications.

        </div>


      </div>
      <div className="mt-20 max-w-6xl mx-auto px-6">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


    <a href="https://www.linkedin.com/in/deepak-singh-negi-633971371/" 
       className="bg-white hover:bg-sky-200 backdrop-blur-md p-8 rounded-2xl 
                  hover:scale-105 transition duration-300 
                  text-center flex flex-col items-center ">

      <img src={linkedInImg} 
           alt="LinkedIn"
           className="w-20 h-20 object-contain mb-4 " />

      <h3 className="text-2xl font-semibold mb-3">LinkedIn</h3>
      <p className="text-black/70 text-sm">
        Professional profile and career updates.
      </p>

    </a>
    <a href="https://github.com/deepak-SinghNegi" 
       className="bg-white hover:bg-red-200 backdrop-blur-md p-8 rounded-2xl 
                  hover:scale-105 transition duration-300 
                  text-center flex flex-col items-center">

      <img src={gitIcon} 
           alt="Git Hub Profile"
           className="w-20 h-20 object-contain mb-4 " />

      <h3 className="text-2xl font-semibold mb-3">Git Hub</h3>
      <p className="text-black/70 text-sm">
        Projects and open-source contributions.
      </p>

    </a>
    <a href="https://leetcode.com/u/deepaknegi16360/" 
       className="bg-white hover:bg-yellow-200 backdrop-blur-md p-8 rounded-2xl 
                  hover:scale-105 transition duration-300 
                  text-center flex flex-col items-center">

      <img src={leetCodeIcon} 
           alt="LinkedIn"
           className="w-20 h-20 object-contain mb-4 " />

      <h3 className="text-2xl font-semibold mb-3">Leet Code</h3>
      <p className="text-black/70 text-sm">
        Data Structures and Algorithm practice.
      </p>

    </a>

  </div>
</div>


    </div>
  )
}

export default Home