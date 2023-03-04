import React from 'react';
//icon
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';
//services data
const services = [
  {
    name: 'UI/UX Design',
    description: 'Creación de interfaces intuitivas y atractivas para sitios web y aplicaciones móviles. Mi enfoque principal es mejorar la experiencia del usuario al interactuar con la tecnología. Utilizo una combinación de habilidades de diseño y psicología cognitiva para crear interfaces fáciles de usar y atractivas visualmente.',
    
  },
  {
    name: 'Developmen',
    description: 'Tengo experiencia en la creación de soluciones personalizadas para empresas y organizaciones. Utilizo las últimas tecnologías y herramientas para desarrollar aplicaciones y sistemas web de alta calidad que cumplan con las necesidades y requisitos específicos de cada cliente. Mi enfoque se centra en la creación de soluciones escalables y fáciles de mantener.',
    
  },
  {
    name: 'Digital Marketing',
    description: 'En cuanto a Digital Marketing, me enfoco en ayudar a las empresas a mejorar su presencia en línea y aumentar su visibilidad. Mis estrategias de marketing digital incluyen la creación de contenido de calidad, la optimización de motores de búsqueda (SEO), la publicidad en redes sociales, y el email marketing. Me aseguro de que mis clientes alcancen sus objetivos de negocio utilizando las últimas herramientas y técnicas de marketing digital.',
    
  },
  {
    name: 'Product Branding',
    description: 'En Product Branding, mi enfoque es ayudar a las empresas a construir y fortalecer su identidad de marca. Desde la creación del logotipo hasta el desarrollo de la estrategia de marca completa, trabajo en colaboración con los clientes para asegurar que su marca refleje sus valores y objetivos empresariales. Me aseguro de que cada elemento de la marca sea coherente y atractivo para los clientes potenciales.',
    
  },

]
const Services = () => {
  return (
    <section className='flex items-center' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/*text and img*/}

          <motion.div
          variants={fadeIn('right', 0.3)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}  
          className='flex-1 lg:bg-services lg:bg-bootom bg-no-repeat mix-blend-lighten m-12 lg:mb-0 '>
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>I´m a Freelance Front-end Developer with over 3 years of experience.</h3>
            <button className="btn btn-sm"><a href="http://github.com/leanmaga" target="_blank" rel="noreferrer"> See my work</a></button>
          </motion.div>

          {/*services*/}

          <motion.div 
          variants={fadeIn('left', 0.5)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}  
          className='flex-1 m-4 lg:mb-0'>

            {/*service list*/}
            <div>
              {services.map((service, index) => {

                //destructure service
                const { name, description } = service;

                return(
                  <div className='border-b border-white/20 flex' key={index}>
                    
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold m-4 md:text-[16px]'>{ name }</h4>
                      <p className='font-secondary leading-tight m-4'>{ description }</p>
                    </div>

                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Services