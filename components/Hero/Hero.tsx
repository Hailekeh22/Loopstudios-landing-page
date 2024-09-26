"use client";

import Nav from "./Nav";
import Slogan from "./Slogan";

const Hero = () => {
  return (
    <div className="bg-hero-mobile lg:bg-hero-desktop bg-cover bg-center w-full h-[100vh] px-8 py-8 lg:px-20">
      <Nav />
      <Slogan />
    </div>
  );
};

export default Hero;
