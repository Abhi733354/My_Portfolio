import React from "react";
import profileImg from "../../assets/images/mypic.jpg";

const Content1 = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-yellow-200 text-[#343a40]"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl px-4">
        <div className="flex items-center justify-center">
          <div className="text-center leading-none">
            <h4 className="text-4xl md:text-[3rem] tracking-tight font-normal mt-2">
              Hii, I'M A
            </h4>

            <h4 className="text-3xl md:text-[3.5rem] font-bold tracking-tight mt-2">
              ABHINAY SHARMA
            </h4>

            <h3 className="text-2xl md:text-[2rem] tracking-tight font-normal mt-2">
              SOFTWARE DEVELOPER
            </h3>

            <div className="flex justify-center space-x-6 mt-3">
              <button className="bg-gray-700 hover:bg-white-600 text-white py-3 px-6 border border-gray-600 rounded-lg shadow">
                View My Work
              </button>
              <button className="bg-gray-700 hover:bg-white-600 text-white py-3 px-6 border border-gray-600 rounded-lg shadow">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={profileImg}
            alt="Abhinay Sharma"
            className="w-80 h-80 md:w-100 md:h-100 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Content1;
