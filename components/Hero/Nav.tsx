"use client"

import { useState } from "react"

const menuItems = [
  {
    id: 1,
    name: "ABOUT",
    link: "#about",
  },
  {
    id: 2,
    name: "CAREERS",
    link: "#careers",
  },
  {
    id: 3,
    name: "EVENTS",
    link: "#events",
  },
  {
    id: 4,
    name: "PRODUCTION",
    link: "#production",
  },
  {
    id: 5,
    name: "SUPPORT",
    link: "#support",
  },
];


const Nav = () => {
    const [toggle,setToggle] = useState(false)

    const toggleMenu = (a:boolean) => {
        setToggle(a)
    }
  return (
    <div className=" flex items-center justify-between">
      <div>
        <a className=" cursor-pointer">
          {" "}
          <img src="logo.svg" alt="logo" />{" "}
        </a>
      </div>

    <div className="hidden lg:flex">
     <ul className=" flex gap-8 text-white">
        {menuItems.map((item) => (
            <li key={item.id}><a href={item.link}>{item.name}</a></li>
        ))}
     </ul>
    </div>

      <div className=" lg:hidden">
        <button onClick={() => toggleMenu(true)}>
          <img src="icon-hamburger.svg" alt="menubtn" />
        </button>
      </div>

      {/* Toggle menu */}

      {toggle && (
        <div onClick={() => toggleMenu(false)} className="w-full h-[100vh] absolute top-0 right-0 bg-black  px-8 py-8">
          <div className="flex items-center justify-between">
            <a>
              <img src="logo.svg" alt="logo"></img>
            </a>
            <a onClick={() => toggleMenu(false)}>
              <img src="icon-close.svg" alt="close"></img>
            </a>
          </div>
          <div className=" w-full h-full flex items-center">
            <div>
              <ul>
                {menuItems.map((item) => (
                  <li
                    className="text-slate-400 py-4 cursor-pointer font-thin text-2xl hover:text-white"
                    key={item.id}
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav