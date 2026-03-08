import { NavLink } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const SingleProject = (project) => {
    const {name,overview,technologies,github,deployed,image,id} = project
  return (
    <div className="glass-card overflow-hidden hover:border-gold-400/30 transition-all duration-500 group">
      <NavLink to={`/project/${id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-dark-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <span className="text-gold-400 font-medium flex items-center gap-2">
              View Details <FaExternalLinkAlt className="text-sm" />
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-serif text-xl font-bold text-champagne-100 mb-3 group-hover:text-gold-400 transition-colors duration-300">
            {name}
          </h3>
          
          <p className="text-champagne-500 text-sm mb-4 line-clamp-2">
            {overview}
          </p>
          
          {technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gold-400/10 text-gold-400 text-xs font-medium rounded-full border border-gold-400/20"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-3 py-1 bg-dark-200 text-champagne-500 text-xs font-medium rounded-full">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}
          
          <div className="divider-gold my-4"></div>
          
          <div className="flex gap-4 pt-2">
            {github && (
              <a 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-champagne-400 hover:text-gold-400 transition-colors duration-300 text-sm font-medium"
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
                className="flex items-center gap-2 text-champagne-400 hover:text-gold-400 transition-colors duration-300 text-sm font-medium"
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