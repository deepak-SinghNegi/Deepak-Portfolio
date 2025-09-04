import React from 'react'
import Button from './Button'
import profilePic from '../assets/profilepic.png'

const Navbar = ( ) => {
    const button_array = [
            {label: "About" ,className : " h-3 p-3 text-white"},
            {label: "Resume" ,className : " h-3 p-3 text-white"},
            {label: "In" ,className : " h-3 p-3 text-white"},
           

        ]
  return (
    <header className="w-full bg-black px-6 py-4 flex items-center justify-between shadow-md">
      
      <div className="flex items-center space-x-3">
        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-indigo-500">
          <img
            src={profilePic}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="text-white font-bold text-lg">Deepak</h1>
      </div>

      
      <nav>
        <Button buttons={button_array} />
      </nav>
    </header>
    
  )
}

export default Navbar