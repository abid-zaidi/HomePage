import React from 'react';
import Orbit from '../Hero/Orbit/Orbit';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between pt-24 py-12 px-6 md:px-12 bg-gradient-to-r from-gray-800 to-teal-900 text-white h-screen">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to <span className="text-orange-500">GlideSphere</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the next generation of web applications, built with cutting-edge technology to empower your business and create seamless user experiences.
        </p>
        <a
          href="#learn-more"
          className="inline-block text-sm md:text-base bg-gradient-to-r from-green-400 to-red-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:opacity-90 transition duration-300"
        >
          Learn More
        </a>
      </div>

     <div className="w-full sm:w-1/2 md:w-1/2 mt-8 md:mt-0">
  <Orbit />
</div>
    </section>
  );
};

export default HeroSection;
