
import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-72 rounded-bl-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500'>

        <div className='ml-16 pt-6 flex'>
            <h1 className='font-extrabold mr-96 text-start font-sans text-slate-200'>
                Olawale Fakorede
            </h1>
            <p className='ml-24 text-slate-200 text-sm hover:text-amber-300 hover:font-semibold'>About</p>
            <p className='ml-12 text-slate-200 text-sm hover:text-amber-300 hover:font-semibold'>Skills</p>
            <p className='ml-12 text-slate-200 text-sm hover:text-amber-300 hover:font-semibold'>My Projects</p>
            <p className='ml-12 text-slate-200 text-sm hover:text-amber-300 hover:font-semibold'>Contact</p>
            
        </div>

        <div className='pt-5 pl-16 font-bold font-sans text-xl pb-10'>
          <h2>Hi,</h2>
          <h2>I am Olawale,</h2>
          <h2>A Frontend Developer,</h2>
          <h2>& a Tutor.</h2>
          <h2>I create user freindly interface.</h2>
        </div>

        <span className='h-7 pt-20 pl-24'>

          Download my Resume
        </span>

    </div>
  )
}

export default Header