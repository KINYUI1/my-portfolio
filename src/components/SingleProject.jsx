import { NavLink } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const SingleProject = (project) => {
    const {name,overview,technologies,github,deployed,image,id} = project
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
      <NavLink to={`/project/${id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white font-semibold flex items-center gap-2">
              View Details <FaExternalLinkAlt className="text-sm" />
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
            {name}
          </h3>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {overview}
          </p>
          
          {technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}
          
          <div className="flex gap-3 pt-2">
            {github && (
              <a 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm font-medium"
              >
                <FaGithub className="text-lg" />
                Code
              </a>
            )}
            {deployed && (
              <a 
                href={deployed}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm font-medium"
              >
                <FaExternalLinkAlt className="text-sm" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </NavLink>
    </div>
  )
}
export default SingleProject