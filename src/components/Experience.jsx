const Experience = (experience) => {
    const {name,duration,description,location,organization,highlights} = experience
  return (
    <div className="glass-card p-8 hover:border-gold-400/30 transition-all duration-500 group">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
        <div>
          <h3 className="font-serif text-2xl font-bold text-champagne-100 group-hover:text-gold-400 transition-colors duration-300">
            {name}
          </h3>
          <h4 className="text-lg font-medium text-gold-400 mt-2 flex items-center gap-2">
            <span className="w-6 h-px bg-gold-400"></span>
            {organization}
          </h4>
        </div>
        <div className="text-sm text-champagne-500 lg:text-right flex-shrink-0">
          <p className="font-medium text-champagne-300">{duration}</p>
          <p className="flex items-center gap-2 lg:justify-end mt-1">
            <span className="text-gold-400">📍</span>
            {location}
          </p>
        </div>
      </div>
      
      {/* Highlights if available */}
      {highlights && highlights.length > 0 && (
        <ul className="space-y-3 mb-6">
          {highlights.slice(0, 4).map((highlight, index) => (
            <li key={index} className="flex items-start gap-3 text-champagne-300 leading-relaxed">
              <span className="text-gold-400 mt-1.5 text-xs">◆</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
      
      {/* Fallback to description if no highlights */}
      {(!highlights || highlights.length === 0) && description && (
        <p className="text-champagne-400 leading-relaxed">{description}</p>
      )}
    </div>
  )
}
export default Experience