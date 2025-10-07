import React from 'react'
import Project1 from '../../assets/images/project_1';
import Project2 from '../../assets/images/book_stack.jpg';
import Project3 from '../../assets/images/e-commerce.jpg';


const Project = ({ darkMode }) => {
  const projects = [
    {
      image: Project1,
      title: "Weather App",
      description:
        "A simple and clean weather app built with React that fetches real-time weather data and displays forecasts beautifully.",
      liveLink: "https://aman-210.github.io/Weather-app/",
      codeLink: "https://github.com/Abhi733354?tab=repositories",
    },
    {
      image: Project2,
      title: "BookStack",
      description:
        "An elegant book management web app built using React and Redux Toolkit, allowing users to browse and manage book collections.",
      liveLink: "https://bookstck.netlify.app/",
      codeLink: "https://github.com/Abhi733354/story_stack.git",
    },
    {
      image: Project3,
      title: "SEBT Website",
      description:
        "A modern, responsive website built using React.js showcasing the services and work of SEBT with smooth animations.",
      liveLink: "https://sebt.netlify.app/",
      codeLink: "https://github.com/Abhi733354/E-Commerce-project.git",
    },
  ];

  return (
    <section
      id='projects'
      className={`pb-12 px-6 md:px-10 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-12'>
          <h4 className={`text-3xl font-medium ${darkMode ? "text-white" : "text-gray-600"}`}>Projects</h4>
          <h2 className={`text-2xl font-bold mt-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Some of my personal work</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`card rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 ${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white"
                }`}
            >
              <img
                src={proj.image}
                alt={`Project ${idx + 1}`}
                className="w-full h-60 object-cover rounded-t-lg"
              />

              <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-yellow-200 text-gray-900"}`}>
                <h4 className={`text-xl font-semibold py-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
                  {proj.title}
                </h4>
                <p className={`text-sm font-normal leading-relaxed px-3 py-2 ${darkMode ? "text-white" : "text-gray-600"}`}>
                  {proj.description}
                </p>
              </div>

              <div className={`${darkMode ? "bg-gray-800" : "bg-gray-700"} p-3`}>
                <div className='flex justify-start gap-5'>
                  <a
                    href={proj.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-yellow-200  text-sm font-medium'
                  >
                    Live Preview
                  </a>
                  <a
                    href={proj.codeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-white hover:text-yellow-200  text-sm font-medium'
                  >
                    Get Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project


