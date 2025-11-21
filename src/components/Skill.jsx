const Skill = ({skill}) => {
    const {image,name} = skill
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group flex flex-col items-center justify-center gap-4">
      <div className="w-16 h-16 flex items-center justify-center bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors duration-300">
        <img 
          className="w-12 h-12 object-contain" 
          src={image} 
          alt={name} 
        />
      </div>
      <h4 className="text-sm font-bold text-gray-800 text-center group-hover:text-indigo-600 transition-colors duration-300">
        {name}
      </h4>
    </div>
  )
}
export default Skill