import React, { useState } from "react";
import menuIcon from "../assets/manu.svg";
import closeIcon from "../assets/close.svg";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu((prev) => !prev);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

        {/* Desktop Navbar */}
        <div
          className="
            hidden lg:flex
            items-center gap-3
            px-4 py-3
            rounded-full
            bg-white/10
            backdrop-blur-lg
            border border-white/10
            shadow-xl
            text-white
          "
        >
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#resume">Resume</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </div>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden fixed top-6 right-6 z-[300]"
        >
          <img
            src={menu ? closeIcon : menuIcon}
            className="h-10"
            alt="menu"
          />
        </button>

        {menu && <MobileMenu closeMenu={() => setMenu(false)} />}
      </nav>
    </>
  );
};

const NavItem = ({ href, children }) => (
  <a
    href={href}
    className="
      px-5 py-2
      rounded-full
      transition-all
      duration-300
      hover:bg-white/20
      hover:scale-105
    "
  >
    {children}
  </a>
);

const MobileMenu = ({ closeMenu }) => {
  return (
    <div
      className="
        fixed inset-0
        bg-slate-950/95
        backdrop-blur-xl
        flex flex-col
        justify-center
        items-center
        gap-8
        text-white
        text-3xl
        z-[250]
      "
    >
      <a onClick={closeMenu} href="#home">Home</a>
      <a onClick={closeMenu} href="#about">About</a>
      <a onClick={closeMenu} href="#resume">Resume</a>
      <a onClick={closeMenu} href="#projects">Projects</a>
      <a onClick={closeMenu} href="#contact">Contact</a>
    </div>
  );
};

export default NavBar;