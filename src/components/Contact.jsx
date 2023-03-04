import React from 'react';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//forms
import { useForm, ValidationError } from '@formspree/react';

//icons
import { FaGithub, FaInstagram,  FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    
    const [state, handleSubmit] = useForm("xjvdrgba");
    if (state.succeeded) {
        return(
            <section className='py-16 lg:section' id='contact'>
                <div className="container mx-auto">
                    <div className='flex flex-col lg:flex-row'>
                        {/*text*/}
                        <motion.div
                        variants={fadeIn('right', 0.3)} 
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }} 
                        className='flex-1 flex justify-start items-center'>
                            <div>
                                <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                                <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 '>Let´s work <br />together!</h2>
                            </div>
                        </motion.div>
                        <motion.div
                        onSubmit={handleSubmit}
                        variants={fadeIn('left', 0.5)} 
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}  
                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center justify-center '>
                            <p className='flex justify-center items-center'>¡Gracias por contactarme!</p>
                        </motion.div>
                        
                    </div>
                </div>
            </section>);
    }

  return (
    <section className='py-16 lg:section' id='contact'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row'>
                {/*text*/}
                <motion.div
                variants={fadeIn('right', 0.3)} 
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }} 
                className='flex-1 flex justify-start items-center'>
                    <div>
                        <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                        <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 '>Let´s work <br />together!</h2>
                        <motion.div 
                            variants={fadeIn('up', 0.7)} 
                            initial='hidden' 
                            whileInView={'show'} 
                            viewport={{once: false, amount: 0.8}}  
                            className='flex text-[20px] gap-x-6 max-w-max lg:mx-0 mb-4 icons-contact'>
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
                    </div>
                </motion.div>
                {/*form*/}
                <motion.form
                onSubmit={handleSubmit}
                variants={fadeIn('left', 0.5)} 
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.3 }}  
                className='flex-1 border rounded-2x1 flex flex-col gap-y-6 pb-16 md:pb-12 p-6 items-start '>
                    <input
                    required
                    id="name"
                    name="name"
                    controlId="formName"
                    type="text" 
                    className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" 
                    placeholder='Your name'/>

                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />

                    <input
                    required
                    id="email" 
                    name="email"
                    controlId="formEmail" 
                    type="text" 
                    className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" 
                    placeholder='Your email'/>

                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />

                    <textarea
                    required
                    id="message" 
                    name="message"
                    controlId="formMessage"
                    className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12" 
                    placeholder='Your message'>
                    </textarea>

                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />

                    <button 
                    type="submit"
                    disabled={state.submitting}
                    className="btn btn-lg">Send message</button>
                </motion.form>
            </div>
        </div>
    </section>
  )
}

export default Contact