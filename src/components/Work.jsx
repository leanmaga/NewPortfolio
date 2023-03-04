import React from 'react';
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '../variants'
//img
import Img1 from '../assets/muebles.png'
import Img2 from '../assets/frank.png'
import Img3 from '../assets/sele.png'

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10 md:m-10'>
          <motion.div 
          variants={fadeIn('left', 0.2)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}  
          className='flex-1 flex flex-col gap-y-12 md:m-16 lg:mb-0'>
            {/*text*/}
            <div>
              <h2 className='h3 leading-tight text-accent'>My Latest Work.</h2>
              <p className="max-w-sm mb-16 md:mb-4 text-[14px]">Recently, I've worked on several exciting projects including creating a landing page for a furniture factory, an online store for a footwear company, and designing and developing the website for Amway. I focused on creating attractive, user-friendly interfaces that were optimized for an enhanced user experience.</p>
              <button className="btn btn-sm"><a href="https://github.com/leanmaga" target="_blank" rel="noreferrer">View all Projects</a></button>
            </div>
            {/*image*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img*/}
              <img src={Img1} alt="portfoliowork1" className='group-hover:scale-125 transition-all duration-500'/>
              {/*pretitle*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className='text-gradient'><a href="https://leanmaga.github.io/mueblesmagallanes/" target="_blank" rel="noopener noreferrer">Web Site</a></span>
              </div>
              {/*title*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className='text-3x1 text-white '>Fábrica de Muebles</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn('right', 0.3)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}  
          className='flex-1 flex flex-col gap-y-10 md:m-16'>
            {/*image*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img*/}
              <img src={Img2} alt="portfoliowork1" className='group-hover:scale-125 transition-all duration-500'/>
              {/*pretitle*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className='text-gradient'><a href="https://leanmaga.github.io/frank-ventas/" target="_blank" rel="noopener noreferrer">Web Site</a> </span>
              </div>
              {/*title*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className='text-3x1 text-white '>Frank Ventas</span>
              </div>
            </div>
            {/*image*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img*/}
              <img src={Img3} alt="portfoliowork1" className='group-hover:scale-125 transition-all duration-500'/>
              {/*pretitle*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className='text-gradient'><a href="https://leanmaga.github.io/store/" target="_blank" rel="noopener noreferrer">Landing Page</a></span>
              </div>
              {/*title*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className='text-3x1 text-white '>Sele-Style</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  ) 
};

export default Work;
