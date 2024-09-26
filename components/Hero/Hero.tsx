"use client";

import Nav from "./Nav";
import Slogan from "./Slogan";

const Hero = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto min-h-sc bg-hero-mobile lg:bg-hero-desktop bg-cover bg-center h-[100vh] max-h-[1080px] px-8 py-8 lg:px-20">
      <Nav />
      <Slogan />
    </div>
  );
};

export default Hero;
