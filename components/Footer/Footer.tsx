import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black px-8 py-10 lg:px-20 lg:flex lg:justify-between">
      <div className=" flex flex-col items-center lg:items-start pt-12 lg:pt-0">
        <img src="logo.svg" alt="logo" />
        <div>
          <ul className="  text-gray-200 lg:flex lg:gap-8 font-semibold py-10 lg:py-0">
            <li className=' py-3'>
              <a href="#about">About</a>
            </li>
            <li className=' py-3'>
              <a href="#careers">Careers</a>
            </li>
            <li className=' py-3'>
              <a href="#events">Events</a>
            </li>
            <li className=' py-3'>
              <a href="#products">Products</a>
            </li>
            <li className=' py-3'>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-end justify-center">
        <div className="flex gap-6">
          <a href="https://facebook.com">
            <img src="icon-facebook.svg" alt="facebook" />
          </a>
          <a href="https://twitter.com">
            <img src="icon-twitter.svg" alt="twitter" />
          </a>
          <a href="https://pinterest.com">
            <img src="icon-pinterest.svg" alt="pinterest" />
          </a>
          <a href="https://instagram.com">
            <img src="icon-instagram.svg" alt="instagram" />
          </a>
        </div>
        <div className="flex py-4">
          <p className=" text-l lg:text-xl font-semibold text-gray-500">
            ©2024 Loopstudios. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer