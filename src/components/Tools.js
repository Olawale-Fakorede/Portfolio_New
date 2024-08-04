
import React, { useState } from 'react'

const Tools = () => {
  const [tools] = useState([
      {toolName: "HTML", imageURL: "https://www.cnet.com/a/img/resize/b9b09bd80b3129a6a5da79d9bd17487b977c9677/hub/2014/10/27/40194e6e-2544-419e-a340-f7c17b2e83c5/html5-wow-image-w3c.jpg?auto=webp&width=768"},
      {toolName: "CSS", imageURL: "https://images.prismic.io/turing/652ebea8fbd9a45bcec8188d_What_Goes_Behind_Writing_a_Flawless_CSS_Code_37742e2bcf.webp?auto=format,compress"},
      {toolName: "JavaScript", imageURL: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},
      {toolName: "TailwindCSS", imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s"},
      {toolName: "ReactJS", imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s"},
      {toolName: "NextJS", imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMklBUVBX0yV0l3hIdTIxP-luLdoRYZAzvbA&s"},
      {toolName: "VS Code", imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmoLCdiuX6nFCVQzOAgM0k8ZYaJHrvVuAqmQ&s"},
      {toolName: "GitHub", imageURL: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"},
      {toolName: "NodeJs", imageURL: "https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png"},
      {toolName: "ExpressJs", imageURL: "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"},
      {toolName: "MongoDb", imageURL: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"},
      {toolName: "Bootstrap", imageURL: "https://ncarb.github.io/bootstrap/assets/img/bootstrap-stack.png"}
  ]);
  
  return (
    <div className=' bg-white h-fit md:h-fit lg:h-fit w-full md:min-w-full lg:max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pb-5'>
      <div className='w-full md:w-72 lg:w-96 lg:pr-5'>
        <p className='pt-3 pl-8 text-justify font-extrabold text-blue-700'>
          Tools I use
          <p className=' text-sm text-black font-medium lg:w-fit '>
          Here are some awesome tools I make use of for 
          development and problem solving easier 
          and faster  for myself and users.
          </p>
        </p>
      </div>

      <div className='h-96 md:h-fit lg:h-full w-full md:w-fit lg:w-fit grid grid-cols-3 overflow-y-scroll md:-ml-10 lg:pt-5 mt-6'>
          {
            tools.map((tool, index) => (
              <div key={index} className='w-full pt-4 pl-4 pr-4 gap-1 hover:translate-x-5 hover:translate-y-5 border-2'>
                <img className='h-22 w-44' src={tool.imageURL} alt={tool.toolName} />
                <p className='text-sm text-black font-bold text-center'>{tool.toolName}</p>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default Tools