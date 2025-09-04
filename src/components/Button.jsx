import React from 'react'

const Button = ({ buttons}) => {
  return (
    <div className='md:flex md:gap-20  md:h-10 md:w-full md:justify-center md:items-center hidden md: mr-20 mt-10 '>
        {buttons.map((btn,index) =>{
        return(    <button 
        key={index}
        className={` ${btn.className}`}> {btn.label}</button>);
        })}
    </div>
  );
};

export default Button