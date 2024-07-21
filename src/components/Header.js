
import React from 'react'

const Header = () => {
  return (
    <div className='w-full min-w-full max-w-full h-80 md:h-64 lg:h-66 rounded-bl-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500'>

        <div className='pl-4 md:pl-12 pt-6 w-full flex flex-row'>
            <h1 className='font-bold text-start font-sans text-slate-200'>
                PORTFOLIO
            </h1>
            <p className='pl-12 md:pl-44 lg:pl-96 text-slate-200 text-xs md:text-lg lg:text-2xl hover:text-amber-300 hover:font-semibold'>About</p>
            <p className='pl-2 md:pl-6 lg:pl-9 text-slate-200 text-xs md:text-lg lg:text-2xl hover:text-amber-300 hover:font-semibold'>Skills</p>
            <p className='pl-2 md:pl-6 lg:pl-9 text-slate-200 text-xs md:text-lg lg:text-2xl hover:text-amber-300 hover:font-semibold'>My Projects</p>
            <p className='pl-2 md:pl-6 lg:pl-9 text-slate-200 text-xs md:text-lg lg:text-2xl hover:text-amber-300 hover:font-semibold'>Contact</p>
            
        </div>

        <div className='pt-5 pl-6 md:pl-12 font-medium font-sans text-sm pb-10'>
          <h2>Hi,</h2>
          <h2>I am Olawale,</h2>
          <h2>A Full Stack Developer,</h2>
          <h2>& Tutor.</h2>
          <h2>I create user freindly interface.</h2>
        </div>

        <span className='h-7 pt-6 pl-6 md:pl-12'>

          Download my Resume
        </span>

    </div>
  )
}

export default Header