import Headings from "../components/Headings";
import SingleProject from "../components/SingleProject";
import projectsData from '../data/projectsData'

const Projects = () => {
  const info = {
    title:'Projects',
    intro:'Showcase of my recent work'
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-7xl mx-auto">
        <Headings {...info} />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project)=>{
            return <SingleProject {...project} key={project.id}/>
          })}
        </div>
      </div>
    </div>
  )
}
export default Projects