import Headings from "../components/Headings";
import SingleProject from "../components/SingleProject";
import projectsData from '../data/projectsData'

const Projects = () => {
  const info = {
    title:'Portfolio',
    intro:'Featured Work'
  }
  return (
    <div className="min-h-screen bg-dark-100 py-16 px-4 sm:px-6 lg:px-8 page-transition">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Headings {...info} />
        
        <p className="text-center max-w-2xl mx-auto mt-8 text-champagne-400 text-lg">
          A curated selection of projects showcasing expertise in full-stack development, 
          automation, and enterprise solutions.
        </p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project)=>{
            return <SingleProject {...project} key={project.id}/>
          })}
        </div>
      </div>
    </div>
  )
}
export default Projects