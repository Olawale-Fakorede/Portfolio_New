
import React from 'react'
import myImage from './images/imageWale.jpg'

const About = () => {
  return (
    <div className='w-full h-fit bg-white rounded-tr-3xl grid text-center justify-center'>
        <h1 className='text-blue-200 font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-9xl pl-20 md:pl-16 lg:pl-52 pt-7'>
          About me
        </h1>
        <br/>
        <div className='w-full h-fit grid grid-cols-1 gap-2 mb-9 relative left-2 lg:left-9 justify-center'>
          <img className='w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 relative left-10 lg:mr-24' src={myImage} alt="" />
          <div className='w-42 h-fit overflow-scroll text-sm md:text-xl lg:text-5xl md:w-72 md:h-72 lg:w-full lg:h-full pl-4 pt-4 pr-3 text-start font-sans mt-3'>
            I'm a Full Stack Developer who loves gaining experiences in new projects.
            I have experoence working with HTML, CSS, JavaScript, ReactJS, NextJS, Tailwind css,
            NodeJS, ExpressJS, MongoDb, and Git. I'm passionate and concerned about delivering user-friendly
            and responsive Web applications as well as solutions to problems.


          </div>
        </div>
        <hr/>
    </div>
  )
}

export default About