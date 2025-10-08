import React from "react";
import profileImg from "../../assets/images/mypic.jpg";
import resumePDF from "../../resume/AbhinaySharma.pdf";
import "../../App.css"

const Content1 = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`pt-16 min-h-screen flex items-center justify-center ${darkMode ? "bg-gray-900" : "bg-yellow-200 text-[#343a40]"
        }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-6 md:px-10">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4">
          <h4 className="text-4xl md:text-[3rem] tracking-tight font-normal">
            Hii, I'M A
          </h4>

          {/* Typing Effect Name */}
          <h4 className="text-3xl md:text-[3.5rem] font-bold tracking-tight typing">
            ABHINAY SHARMA
          </h4>

          <h3 className="text-2xl md:text-[2rem] tracking-tight font-normal">
            SOFTWARE DEVELOPER
          </h3>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 border border-gray-600 rounded-lg shadow transition no-underline"
            >
              View My Work
            </a>
            <a
              href={resumePDF}
              download="Abhinay_Sharma_Resume.pdf"
              className="bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 border border-gray-600 rounded-lg shadow transition no-underline"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src={profileImg}
            alt="Abhinay Sharma"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Content1;


