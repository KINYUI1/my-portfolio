import projectsData from '../data/projectsData'
import {useParams} from 'react-router-dom'
const Project = () => {
  const {id} = useParams()
  const singleProject = projectsData.find((project)=> project.id === id)
  const {name,overview,technologies,github,deployed,image} = singleProject
  console.log(name);
  return (
    <div className='mx-32'>
      <div className='mx-auto my-10 '>
        <img src={image} alt={name} className='w-4/5 mx-auto'/>
      </div>
      <div className="border-b border-black my-8" ></div>
      <div className='flex gap-8 mb-4'>
        <div>
          <h2 className='text-5xl capitalize my-4'>overview</h2>
          <p className='my-4'>{overview}</p>
          <div className='flex gap-4'>
            <a href={deployed} target='blank'><button className='uppercase bg-slate-500 px-2 rounded-md text-2xl'>live</button></a>
            <a href={github} target='blank'><button className='uppercase bg-slate-500 px-2 rounded-md text-2xl'>gitHub</button></a>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='font-bold py-4'>Technologies</h3>
          <ul className='list-disc'>
            {technologies.map((technology)=>{
              return <li>{technology}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Project