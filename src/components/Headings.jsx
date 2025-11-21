const Headings = ({title,intro}) => {
  return (
    <div className="text-center space-y-3">
      <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-indigo-600">
        {title}
      </h2> 
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 relative inline-block">
        {intro}
        <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transform scale-x-50 transition-transform duration-300"></span>
      </h1> 
    </div>
  )
}
export default Headings