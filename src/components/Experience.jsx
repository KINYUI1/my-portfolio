const Experience = (experience) => {
    const {name,duration,description,location,organization} = experience
  return (
    <div>
        <h2 className="capitalize pt-8 text-lg font-bold">{name}</h2>
        <h2 className=" shadow-stone-900 hover:text-stone-400 text-lg text-indigo-400 font-bold py-1">@{organization}</h2>
        <h2 className="py-2">{duration} | {location}</h2>
        <p>{description}</p>
    </div>
  )
}
export default Experience