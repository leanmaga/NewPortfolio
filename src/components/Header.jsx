import React from 'react';

//icons
import { FaGithub, FaInstagram,  FaLinkedinIn, FaTwitter } from 'react-icons/fa';


//motion
import { motion } from 'framer-motion';


//variants
import { fadeIn } from '../variants';


const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/*logo*/}

        <a href='#home'>
          <h2 className='md:text-[24px] lg:text-[60px] font-secondary font-semibold uppercase'>L<span className='text-accent'>M</span></h2>  
        </a>

        <motion.div 
            variants={fadeIn('up', 0.7)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.8}}  
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://instagram.com/le_mark2023' target="_blank" rel="noreferrer">
                <FaInstagram/>
              </a>
              <a href='https://github.com/leanmaga' target="_blank" rel="noreferrer">
                <FaGithub/>
              </a>
              <a href='https://www.linkedin.com/in/leandromagallanes/' target="_blank" rel="noreferrer">
                <FaLinkedinIn/>
              </a>
              <a href='https://twitter.com/Le_Mark2023' target="_blank" rel="noreferrer">
                <FaTwitter/>
              </a>
            </motion.div>

        {/*button*/}
        <button className='btn btn-sm'><a href='#contact'>Work with me</a></button>
      </div>
    </div>
  </header>
  )
};

export default Header;
