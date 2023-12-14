import Skill from "../components/Skill"
import { skills } from "../data/skillData"
import {nanoid} from 'nanoid'
import Headings from "../components/Headings";

const Skills = () => {
  const info = {
    title:'skills',
    intro:'my technical skills'
  }
  return (
    <main className="h-screen py-8 px-20">
      <div className="px-32 sm:px-40">
        <Headings {...info} />
      </div>
        <div className="flex flex-col justify-center items-center px-0  sm:grid sm:grid-cols-2 sm:px-40 md:grid-cols-3 lg:grid-cols-4 bg-blue-50">
            {skills.map((skill)=>{
                return <Skill key={nanoid()} skill={skill}/>
            })}
        </div>
    </main>
  )
}
export default Skills