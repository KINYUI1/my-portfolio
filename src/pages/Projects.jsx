import Headings from "../components/Headings";
import SingleProject from "../components/SingleProject";
import projectsData from '../data/projectsData'
const Projects = () => {
  const info = {
    title:'projects',
    intro:'some of my projects'
  }
  return (
    <div className="min-h-screen mx-auto">
      <div className="px-2 py-8 sm:px-24 md:px80">
        <Headings {...info} />
      </div>
      <div className="mx-12 py-8 sm:px-auto sm:grid grid-cols-2 md:px-20 md:mx-auto gap-8">
        {/* projects to enter here */}
        {projectsData.map((project)=>{
          return <SingleProject {...project} key={project.id}/>
        })}
      </div>
    </div>
  )
}
export default Projects