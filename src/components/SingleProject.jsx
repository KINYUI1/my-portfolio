import { NavLink } from "react-router-dom";

const SingleProject = (project) => {
    console.log(project);
    const {name,overview,technologies,github,deployed,image,id} = project
  return (
    <div>
        <NavLink to={`/project/${id}`}>
        <img src={image} alt={name} className="max-w-1xl"/>
        <h3>{name}</h3>
        </NavLink>
    </div>
  )
}
export default SingleProject