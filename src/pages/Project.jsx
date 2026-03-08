import projectsData from '../data/projectsData'
import {useParams, Link} from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

const Project = () => {
  const {id} = useParams()
  const singleProject = projectsData.find((project)=> project.id === id)
  
  if (!singleProject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-100 page-transition">
        <div className="text-center glass-card p-12">
          <h2 className="font-serif text-2xl font-bold text-champagne-100 mb-4">Project not found</h2>
          <Link to="/projects">
            <button className="btn-elegant">
              Back to Projects
            </button>
          </Link>
        </div>
      </div>
    )
  }
  
  const {name,overview,technologies,github,deployed,image} = singleProject
  
  return (
    <div className='min-h-screen bg-dark-100 py-16 px-4 sm:px-6 lg:px-8 page-transition'>
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className='relative max-w-6xl mx-auto'>
        {/* Back Button */}
        <Link to="/projects">
          <button className='flex items-center gap-2 text-champagne-400 hover:text-gold-400 transition-colors duration-300 mb-8 font-medium'>
            <FaArrowLeft /> Back to Projects
          </button>
        </Link>

        {/* Project Title */}
        <div className="text-center mb-12">
          <p className="subheading-elegant mb-4">Project</p>
          <h1 className='heading-elegant'>
            {name}
          </h1>
          <div className="flex justify-center pt-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
          </div>
        </div>

        {/* Project Image */}
        <div className='glass-card overflow-hidden mb-12'>
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
            <div className='glass-card p-8 hover:border-gold-400/30 transition-all duration-500'>
              <h2 className='font-serif text-3xl font-bold text-champagne-100 mb-4 flex items-center gap-3'>
                <span className="w-8 h-px bg-gold-400"></span>
                Overview
              </h2>
              <p className='text-champagne-300 leading-relaxed text-lg'>{overview}</p>
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
                  <button className='w-full btn-elegant flex items-center justify-center gap-3'>
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
                  <button className='w-full btn-outline-elegant flex items-center justify-center gap-3'>
                    <FaGithub />
                    View on GitHub
                  </button>
                </a>
              )}
            </div>
          </div>

          {/* Technologies Section */}
          <div className='lg:col-span-1'>
            <div className='glass-card p-8 hover:border-gold-400/30 transition-all duration-500 sticky top-24'>
              <h3 className='font-serif text-2xl font-bold text-champagne-100 mb-6'>Technologies</h3>
              <div className='space-y-3'>
                {technologies.map((technology, index)=>{
                  return (
                    <div 
                      key={index} 
                      className='flex items-center gap-3 p-3 bg-dark-200/50 rounded-lg border border-gold-400/5 hover:border-gold-400/20 transition-all duration-300'
                    >
                      <span className='text-gold-400 text-sm'>◆</span>
                      <span className='text-champagne-300 font-medium'>{technology}</span>
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