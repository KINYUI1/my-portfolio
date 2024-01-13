const Skill = ({skill}) => {
    const {image,name} = skill
  return (
    <div className="flex px-2 h-20 my-3 border-2 mr-4 rounded-lg shadow-xl hover:scale-105 ease-in duration-200 ">
        <div className="w-8 flex justify-center items-center">
            <img className="rounded-md" src={image} alt={name} />
        </div>
        <div className="ml-1 uppercase font-bold flex justify-center items-center">
            <h4>{name}</h4>
        </div>
    </div>
  )
}
export default Skill