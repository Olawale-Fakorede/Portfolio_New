// import React, { useState } from 'react'


// const Works = () => {

//     const [projects, setProjects] = useState([
//         {title: "Portfolio", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjLZjElWW5_dsSUBm1X-u-3hFJLjAK10efQ&s", demo: "", githubLink: "https://github.com/Olawale-Fakorede/Portfolio_New",},
//         {title: "Dictionary", imageUrl: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/166091799-7db29784aa4428989ba16ea52f62a3dd.jpg", demo: "https://dictionary-application-9u1f.vercel.app/", githubLink: "https://github.com/Olawale-Fakorede/Dictionary-Application",},
//         {title: "IP Address Tracker", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQXkiCgn6vvD7IE5q86vF79xg6YTKz3ywFw&s", demo: "https://olawale-fakorede.github.io/IPAddressTrackerProject/", githubLink: "https://github.com/Olawale-Fakorede/IPAddressTrackerProject",},
//         {title: "Timer", imageUrl: "https://cdn.hswstatic.com/gif/How-to-make-a-one-minute-timer.jpg", demo: "https://olawale-fakorede.github.io/TIMER-countdown-/", githubLink: "https://github.com/Olawale-Fakorede/TIMER-countdown-",},
//         {title: "Learning App", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wsQUy_2Tm-elaPaPFs2TZ56R1JsCfsN6jQ&s", demo: "https://alphabeth-learning-app.vercel.app/", githubLink: "https://github.com/Olawale-Fakorede/ALPHABETH-LEARNING-APP",},
//         {title: "Grading System", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdohaHdP8W0R5Lj5lvv_9jm2mZTw1R5AKzyA&s", demo: "https://olawale-fakorede.github.io/Grading-System/", githubLink: "https://github.com/Olawale-Fakorede/Grading-System",},
//         {title: "StopWatch", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyX9evwGk4Ao38I5UqPikJWLuTLHcfobD8g&s", demo: "https://stopwatch-one-virid.vercel.app/", githubLink: "https://github.com/Olawale-Fakorede/STOPWATCH",},
//         {title: "ToDo List", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjpHpnrh8l3uc5hxHZLv8AKCrAuEnXJECUg&s", demo: "https://olawale-fakorede.github.io/ToDoList/", githubLink: "https://github.com/Olawale-Fakorede/ToDoList",},
//         {title: "Arithmetic Table", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nKWgiLUyUWj76RaHd1Nm1_tisw0m78S2Dg&s", demo: "https://arithmetic-table.vercel.app/", githubLink: "https://github.com/Olawale-Fakorede/Arithmetic-Table",},
//         {title: "Accordion", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiiMPVWXGC5zR7d6p4e1gYRJh816F1ZGK_Zw&s", demo: "", githubLink: "https://github.com/Olawale-Fakorede/Accordion",},
//         {title: "Larva Landing Page", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TTxr-80JXUd1I4GgjpuCDFL59SqOntQTnA&s", demo: "", githubLink: "https://github.com/Olawale-Fakorede/larva-proJect",},
//         {title: "", imageUrl: "", demo: "", githubLink: "",}
//     ]);
//   return (
//     <div className='mt-4 z-10 '>
//         Works
//     </div>
//   )
// }

// export default Works



import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const Works = () => {
  const [projects, setProjects] = useState([
            {title: "Portfolio", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjLZjElWW5_dsSUBm1X-u-3hFJLjAK10efQ&s", demo: "", githubLink: "https://github.com/Olawale-Fakorede/Portfolio_New",},
            {title: "Dictionary", imageUrl: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/166091799-7db29784aa4428989ba16ea52f62a3dd.jpg", demo: "https://dictionary-application-9u1f.vercel.app/", githubLink: "https://github.com/Olawale-Fakorede/Dictionary-Application",},
            {title: "IP Address Tracker", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQXkiCgn6vvD7IE5q86vF79xg6YTKz3ywFw&s", demo: "https://olawale-fakorede.github.io/IPAddressTrackerProject/", githubLink: "https://github.com/Olawale-Fakorede/IPAddressTrackerProject",},
            {title: "Timer", imageUrl: "https://cdn.hswstatic.com/gif/How-to-make-a-one-minute-timer.jpg", demo: "https://olawale-fakorede.github.io/TIMER-countdown-/", githubLink: "https://github.com/Olawale-Fakorede/TIMER-countdown-",},
            {title: "Learning App", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wsQUy_2Tm-elaPaPFs2TZ56R1JsCfsN6jQ&s", demo: "https://alphabeth-learning-app.vercel.app/", githubLink: "https://github.com/Olawale-Fakorede/ALPHABETH-LEARNING-APP",},
            {title: "Grading System", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdohaHdP8W0R5Lj5lvv_9jm2mZTw1R5AKzyA&s", demo: "https://olawale-fakorede.github.io/Grading-System/", githubLink: "https://github.com/Olawale-Fakorede/Grading-System",},
            {title: "StopWatch", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyX9evwGk4Ao38I5UqPikJWLuTLHcfobD8g&s", demo: "https://stopwatch-one-virid.vercel.app/", githubLink: "https://github.com/Olawale-Fakorede/STOPWATCH",},
            {title: "ToDo List", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjpHpnrh8l3uc5hxHZLv8AKCrAuEnXJECUg&s", demo: "https://olawale-fakorede.github.io/ToDoList/", githubLink: "https://github.com/Olawale-Fakorede/ToDoList",},
            {title: "Arithmetic Table", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nKWgiLUyUWj76RaHd1Nm1_tisw0m78S2Dg&s", demo: "https://arithmetic-table.vercel.app/", githubLink: "https://github.com/Olawale-Fakorede/Arithmetic-Table",},
            {title: "Accordion", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiiMPVWXGC5zR7d6p4e1gYRJh816F1ZGK_Zw&s", demo: "", githubLink: "https://github.com/Olawale-Fakorede/Accordion",},
            {title: "Larva Landing Page", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TTxr-80JXUd1I4GgjpuCDFL59SqOntQTnA&s", demo: "", githubLink: "https://github.com/Olawale-Fakorede/larva-proJect",},
            {title: "", imageUrl: "", demo: "", githubLink: "",}
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === projects.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? projects.length - 1 : prevSlide - 1));
  };

  return (
    <div className="works-container container mx-auto px-4 py-8 bg-white md:h-3/4">
      <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">Works</h2>

      <div className="carousel relative overflow-hidden">
        <div className="carousel-track flex transition duration-500 ease-in-out transform" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {projects.map((project, index) => (
            <div key={index} className="project-card w-full flex-shrink-0 bg-white rounded-lg shadow-md mx-4">
              <img src={project.imageUrl} alt={project.title} className="w-full md:min-w-full lg:max-w-full h-72 md:h-80 lg:h-1/2 object-cover rounded-t-lg" />
              
              <div className="p-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
                
                <div className="flex justify-between items-center mt-2">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-24 h-10 bg-purple-600 text-white p-2 hover:underline ">Live Demo</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className=" bg-fuchsia-600 text-white p-2 hover:underline ">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button prev absolute left-0 top-12 md:top-28 lg:top-44 z-10 flex items-center justify-center h-44 md:h-72 lg:h-96 px-4 rounded-lg focus:outline-none" onClick={handlePrevSlide}>
          <FaAngleLeft className="text-2xl md:text-5xl lg:text-7xl text-gray-700" />
        </button>
        <button className="carousel-button next absolute right-0  top-12 md:top-28 lg:top-44 z-10 flex items-center justify-center h-44 md:h-72 lg:h-96 px-4 rounded-lg focus:outline-none" onClick={handleNextSlide}>
          <FaAngleRight className="text-2xl md:text-5xl lg:text-7xl text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Works;