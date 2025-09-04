import React from 'react'
import Button from './Button'

const Navbar = ( {bgColor}) => {
    const button_array = [
            {label: "Home" ,className : " h-3 p-3 text-white"},
            {label: "Work" ,className : " h-3 p-3 text-white"},
            {label: "Resume" ,className : " h-3 p-3 text-white"},
            {label: "in" ,className : " h-3 p-3 text-white"},
            {label: "gitHub" ,className : " h-3 p-3 text-white"},
            {label: "Dsa" ,className : " h-3 p-3 text-white"},

        ]
  return (
    <div className='flex w-screen justify-end'><nav className={` bg-[#000000] ${bgColor}`}>
        
        
        <Button
    buttons = {button_array}
    />
    </nav></div>
    
  )
}

export default Navbar