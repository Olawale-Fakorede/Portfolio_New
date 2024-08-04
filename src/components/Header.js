
import React from 'react'
import { FaAlignJustify } from "react-icons/fa6";
// import { FaWindowClose } from "react-icons/fa";

const Header = () => {

    // function openList() {
    //   document.querySelector('li').style.display = 'block';
    //   // document.getElementById('close').style.display = 'block';
    //   // document.getElementById('open').style.display = 'hidden';
    // };

    function openList() {
      const listItems = document.querySelectorAll('main');
      listItems.forEach(item => {
        item.style.display = (item.style.display === 'none') ? 'block' : 'none';
      });
    }

    function closeList() {
      document.querySelector('main').style.display = 'hidden';
      // document.getElementById('close').style.display = 'hidden';
      // document.getElementById('open').style.display = 'block';
    };

  return (
    <div className='w-full min-w-full max-w-full h-80 md:h-66 lg:h-70 lg:grid lg:grid-cols-1 rounded-bl-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500'>

        <div className='pl-4 md:pl-12 pt-6 w-full flex flex-row lg:flex lg:w-full text-lg md:text-3xl lg:text-5xl'>
            <h1 className='font-bold text-start font-sans text-slate-200 md:text-xl lg:text-2xl'>
                PORTFOLIO
            </h1>
            <span id='open' className='block text-white ml-56 hover:text-black md:hidden lg:hidden' onClick={openList} onDoubleClick={closeList}><FaAlignJustify /></span>
            {/* <span id='close' className='hidden text-white -ml-4 mt-4 hover:text-black md:hidden lg:hidden' onClick={closeList}><FaWindowClose /></span> */}
            
            <main className='hidden ease-in-out h-44 w-24 bg-black md:bg-transparent lg:bg-transparent absolute left-64 top-12 md:left-10 lg:left-8 md:flex lg:flex md:text-lg lg:text-xl md:pl-2 md:-mt-2 lg:w-screen lg:text-center'>
              <p className='pl-5 mt-3 mb-6 md:pl-40 lg:pl-96 text-slate-200 text-xs md:text-lg lg:text-xl hover:text-amber-300 hover:font-semibold'>About</p>
              <p className='pl-5 mb-6 md:pl-6 lg:pl-9 text-slate-200 text-xs md:text-sm lg:text-xl hover:text-amber-300 hover:font-semibold'>Skills</p>
              <p className='pl-5 mb-6 md:pl-6 lg:pl-9 text-slate-200 text-xs md:text-sm lg:text-xl hover:text-amber-300 hover:font-semibold'>My Projects</p>
              <p className='pl-5 mb-6 md:pl-6 lg:pl-9 text-slate-200 text-xs md:text-sm lg:text-xl hover:text-amber-300 hover:font-semibold'>Contact</p>
            </main>
          
        </div>

        <div className='pt-5 pl-6 md:pl-12 font-medium font-sans text-sm pb-10 md:font-bold md:text-lg lg:font-bold lg:text-xl'>
          <h2>Hi,</h2>
          <h2>I am Olawale,</h2>
          <h2>A Full Stack Developer,</h2>
          <h2>& Tutor.</h2>
          <h2>I create user freindly interface.</h2>
        </div>

        <div className='h-7 lg:-pt-4 pl-6 md:pl-12'>

          Download my Resume
        </div>

    </div>
  )
}

export default Header