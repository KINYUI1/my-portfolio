import Headings from "../components/Headings";
import SingleProject from "../components/SingleProject";
import projectsData from '../data/projectsData'
const Projects = () => {
  const info = {
    title:'projects',
    intro:'some of my projects'
  }
  return (
    <div className="min-h-screen">
      <div className="px-32 py-8 sm:px-80">
        <Headings {...info} />
      </div>
      <div className="x-32 py-8 sm:px-80 grid grid-cols-2">
        {/* projects to enter here */}
        {projectsData.map((project)=>{
          return <SingleProject {...project} key={project.id}/>
        })}
      </div>
    </div>
  )
}
export default Projects