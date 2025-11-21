import Skill from "../components/Skill"
import { skills } from "../data/skillData"
import {nanoid} from 'nanoid'
import Headings from "../components/Headings";

const Skills = () => {
  const info = {
    title:'Technical Skills',
    intro:'Technologies I work with'
  }
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 page-transition">
      <div className="max-w-7xl mx-auto">
        <Headings {...info} />
        
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {skills.map((skill)=>{
            return <Skill key={nanoid()} skill={skill}/>
          })}
        </div>
      </div>
    </main>
  )
}
export default Skills