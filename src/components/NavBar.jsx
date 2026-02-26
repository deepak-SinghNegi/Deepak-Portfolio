import React, { useState } from "react";
import manuIcon from "../assets/manu.svg";
import closeIcon from "../assets/close.svg";

const NavBar = () => {
  const [manu, setManu] = useState(false);

  const handleClick = () => setManu((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 p-10 lg:flex lg:items-center md:justify-center">
      <div className="fixed right-10 top-8 lg:hidden">
        {manu && <DropBox setManu={setManu} />}
        <img
          className="fixed top-6 right-6 z-[200] lg:hidden h-10"
          onClick={handleClick}
          src={!manu ? manuIcon : closeIcon}
          alt=""
        />
      </div>

      <div className="bg-white/10 p-3 rounded-full hidden z-50 text-white lg:flex gap-12">
        <a className="text-center p-2 hover:bg-white/20 rounded-full" href="#home">
          Home
        </a>
        <a className="text-center p-2 hover:bg-white/20 rounded-full" href="#about">
          About me
        </a>
        <a className="text-center p-2 hover:bg-white/20 rounded-full" href="#resume">
          Resume
        </a>
        <a className="text-center p-2 hover:bg-white/20 rounded-full" href="#projects">
          Projects
        </a>
      </div>

      <div className="hidden lg:flex text-white bg-white/10 p-3 rounded-full absolute right-5">
        <a className="text-center p-2 hover:bg-white/20 rounded-full" href="#contact">
          Contact me
        </a>
      </div>
    </nav>
  );
};

const DropBox = ({ setManu }) => {
  const removeDropBox = () => setManu(false);

  return (
    <div className="text-4xl fixed inset-0 z-[200] text-white flex flex-col items-center justify-center gap-10 lg:hidden bg-white/85">
      <a onClick={removeDropBox} className="text-black p-2" href="#home">
        Home
      </a>
      <a onClick={removeDropBox} className="text-black p-2" href="#about">
        About me
      </a>
      <a onClick={removeDropBox} className="text-black p-2" href="#resume">
        Resume
      </a>
      <a onClick={removeDropBox} className="text-black p-2" href="#projects">
        Projects
      </a>
      <a onClick={removeDropBox} className="text-black p-2" href="#contact">
        Contact me
      </a>
    </div>
  );
};

export default NavBar;