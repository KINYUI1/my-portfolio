import author from "../images/author.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdDownload } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 page-transition">{/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src={author}
                alt="Clement Kinyui Ndimuangu"
                className="relative rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl ring-4 ring-white"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800">
                👋 Available for Work
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Clement Kinyui
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700">
                Full Stack Software Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Motivated software engineer with expertise in computer science principles, 
              programming languages, and software development. Skilled in developing and 
              maintaining applications to meet user needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link to="/projects">
                <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View My Work
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <a href='/Clement Ndimuangu.docx' download='Clement Ndimuangu Resume.docx'>
                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <MdDownload className="text-xl" />
                  Download Resume
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-6">
              <a
                href="https://www.linkedin.com/in/clement-kinyui-ndimuangu-11876b250"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full hover:bg-indigo-600 transform hover:scale-110 transition-all duration-300 shadow-lg text-white group"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://github.com/KINYUI1?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full hover:bg-indigo-600 transform hover:scale-110 transition-all duration-300 shadow-lg text-white group"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <Link 
                to="/contact-me"
                className="w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full hover:bg-indigo-600 transform hover:scale-110 transition-all duration-300 shadow-lg text-white group"
                aria-label="Email"
              >
                <CiMail className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-indigo-600 mb-2">2+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-indigo-600 mb-2">5+</div>
            <div className="text-gray-600 font-medium">Technologies</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Commitment</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
