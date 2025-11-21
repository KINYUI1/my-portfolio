import projectsData from '../data/projectsData'
import {useParams, Link} from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const Project = () => {
  const {id} = useParams()
  const singleProject = projectsData.find((project)=> project.id === id)
  
  if (!singleProject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 page-transition">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h2>
          <Link to="/projects">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
              Back to Projects
            </button>
          </Link>
        </div>
      </div>
    )
  }
  
  const {name,overview,technologies,github,deployed,image} = singleProject
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 page-transition'>
      <div className='max-w-6xl mx-auto'>
        {/* Back Button */}
        <Link to="/projects">
          <button className='flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300 mb-8 font-semibold'>
            <FaArrowLeft /> Back to Projects
          </button>
        </Link>

        {/* Project Title */}
        <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center'>
          {name}
        </h1>

        {/* Project Image */}
        <div className='bg-white rounded-2xl shadow-2xl overflow-hidden mb-12'>
          <img 
            src={image} 
            alt={name} 
            className='w-full h-auto object-cover'
          />
        </div>

        {/* Project Details */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Overview Section */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>Overview</h2>
              <p className='text-gray-700 leading-relaxed text-lg'>{overview}</p>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              {deployed && (
                <a 
                  href={deployed} 
                  target='_blank' 
                  rel="noopener noreferrer"
                  className='flex-1'
                >
                  <button className='w-full flex items-center justify-center gap-3 px-6 py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                    <FaExternalLinkAlt />
                    View Live Demo
                  </button>
                </a>
              )}
              {github && (
                <a 
                  href={github} 
                  target='_blank' 
                  rel="noopener noreferrer"
                  className='flex-1'
                >
                  <button className='w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                    <FaGithub />
                    View on GitHub
                  </button>
                </a>
              )}
            </div>
          </div>

          {/* Technologies Section */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 sticky top-24'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Technologies Used</h3>
              <div className='space-y-3'>
                {technologies.map((technology, index)=>{
                  return (
                    <div 
                      key={index} 
                      className='flex items-center gap-3 p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors duration-300'
                    >
                      <div className='w-2 h-2 bg-indigo-600 rounded-full'></div>
                      <span className='text-gray-800 font-medium'>{technology}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Project