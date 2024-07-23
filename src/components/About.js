
import React from 'react'
import myImage from './images/imageWale.jpg'

const About = () => {
  return (
    <div className='w-full h-fit bg-white rounded-tr-3xl grid text-center justify-center'>
        <h1 className='text-blue-200 font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-9xl pl-20 md:pl-16 lg:pl-52 pt-7'>
          About me
        </h1>
        <br/>
        <div className='w-full h-fit md:h-screen lg:h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-9 relative left-2  justify-center'>
          <img className='w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 relative left-10' src={myImage} alt="" />
          <div className='w-42 h-fit md:overflow-scroll lg:overflow-scroll text-sm md:text-xl lg:text-xl md:w-72 md:h-72 lg:w-full lg:h-full pt-2 pr-3 text-start font-sans mt-3 lg:mt-0'>
            I'm a Full Stack Developer who loves gaining experiences in new projects.
            I have experoence working with HTML, CSS, JavaScript, ReactJS, NextJS, Tailwind css,
            NodeJS, ExpressJS, MongoDb, and Git. I'm passionate and concerned about delivering user-friendly
            and responsive Web applications as well as solutions to problems.
            <br/>
            I posses strong solving and supportive skills, which has helped me so well working 
            with different teams and people. I also ensure works are done properly and in time
            to avoid delays.
            I also love to learn new skills that as long as it adds value to me. 

          </div>
        </div>
        <hr/>
    </div>
  )
}

export default About