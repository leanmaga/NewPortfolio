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
              <a href='www.youtube.com' >
                <FaInstagram/>
              </a>
              <a href='https://github.com/leanmaga' >
                <FaGithub/>
              </a>
              <a href='www.dribble.com'>
                <FaLinkedinIn/>
              </a>
              <a href='www.dribble.com'>
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
