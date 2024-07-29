import React, { useState } from 'react'


const Works = () => {

    const [projects, setProjects] = useState([
        {title: "Dictionary", imageUrl: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/166091799-7db29784aa4428989ba16ea52f62a3dd.jpg", demo: "https://dictionary-application-9u1f.vercel.app/", githubLink: "https://github.com/Olawale-Fakorede/Dictionary-Application",},
        {title: "IP Address Tracker", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRQXkiCgn6vvD7IE5q86vF79xg6YTKz3ywFw&s", demo: "https://olawale-fakorede.github.io/IPAddressTrackerProject/", githubLink: "https://github.com/Olawale-Fakorede/IPAddressTrackerProject",},
        {title: "", imageUrl: "", demo: "", githubLink: "",},
        {title: "", imageUrl: "", demo: "", githubLink: "",},
        {title: "", imageUrl: "", demo: "", githubLink: "",},
        {title: "", imageUrl: "", demo: "", githubLink: "",},
        {title: "", imageUrl: "", demo: "", githubLink: "",},
        {title: "", imageUrl: "", demo: "", githubLink: "",},
        {title: "", imageUrl: "", demo: "", githubLink: "",},
        {title: "", imageUrl: "", demo: "", githubLink: "",},
        {title: "", imageUrl: "", demo: "", githubLink: "",},
    ]);
  return (
    <div className='mt-4 z-10 '>
        Works
    </div>
  )
}

export default Works