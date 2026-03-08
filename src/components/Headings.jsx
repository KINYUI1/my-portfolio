const Headings = ({title,intro}) => {
  return (
    <div className="text-center space-y-4">
      <p className="subheading-elegant">
        {title}
      </p> 
      <h1 className="heading-elegant relative inline-block">
        {intro}
      </h1>
      <div className="flex justify-center pt-4">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
      </div>
    </div>
  )
}
export default Headings