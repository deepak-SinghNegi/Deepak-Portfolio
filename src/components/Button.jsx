import React from 'react'

const Button = ({ buttons, showIcons = false }) => {
  return (
    <div className="flex items-center space-x-6">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className={`flex items-center flex-col gap-2 cursor-pointer ${btn.className}`}
        >
          {showIcons && btn.icon && (
            <img src={btn.icon} alt={btn.label} className="h-35 w-35" />
          )}
          <span className="text-white">{btn.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Button