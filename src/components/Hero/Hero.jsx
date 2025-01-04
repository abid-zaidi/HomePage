import React from 'react';
import Orbit from '../Hero/Orbit/Orbit'

const HeroSection = () => {
  return (
    <section className="flex items-center justify-between py-20 px-4 bg-gradient-to-r from-gray-800 to-teal-900 text-white h-screen">
      <div className="w-full pl-10 md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">Welcome to <span className='text-orange-500'>GlideSphere</span></h1>
        <p className="text-xl mb-6">
          Discover the next generation of web applications, built with cutting-edge technology to empower your business and create seamless user experiences.
        </p>
        <a
          href="#learn-more"
          className="inline-block text-sm bg-gradient-to-r from-green-400 to-red-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300"
        >
          Learn More
        </a>
      </div>

      <div className="hidden md:block md:w-1/2">
        <Orbit/>
      </div>
    </section>
  );
};

export default HeroSection;