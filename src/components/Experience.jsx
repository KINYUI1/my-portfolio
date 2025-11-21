const Experience = (experience) => {
    const {name,duration,description,location,organization} = experience
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-indigo-600">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <h4 className="text-lg font-semibold text-indigo-600 mt-1">
            @ {organization}
          </h4>
        </div>
        <div className="text-sm text-gray-600 sm:text-right">
          <p className="font-medium">{duration}</p>
          <p>{location}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  )
}
export default Experience