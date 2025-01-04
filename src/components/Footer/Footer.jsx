import {  FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';


const Footer = () => {
 

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-teal-900 text-white py-10 px-4 md:px-8">
      
      <div className="border-t border-gray-600 mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center md:text-left">
            Copyright © 2024. All Rights Reserved Hexagon Digital Services.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
           
            <a href="https://x.com/HexagonDService?t=t5Mk5Ff01d9wIR5Y_8ajjQ&s=09" className="text-gray-400 rounded-md bg-white/10 py-1 px-1 hover:text-white transition duration-300 ease-in-out">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/hexagondigtial-services/" className="text-gray-400 rounded-md bg-white/10 py-1 px-1 hover:text-white transition duration-300 ease-in-out">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/HexagonDService" className="text-gray-400 rounded-md bg-white/10 py-1 px-1 hover:text-white transition duration-300 ease-in-out">
              <FaGithub />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;