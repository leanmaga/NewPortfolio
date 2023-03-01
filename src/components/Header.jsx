import React from 'react';


const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/*logo*/}

        <a href='#home'>
          <h2 className='md:text-[24px] lg:text-[60px] font-secondary font-semibold uppercase'>L<span className='text-accent'>M</span></h2>  
        </a>

        {/*button*/}
        <button className='btn btn-sm'><a href='#contact'>Work with me</a></button>
      </div>
    </div>
  </header>
  )
};

export default Header;
