const Headings = ({title,intro}) => {
  return (
    <div>
       <h2 className="capitalize font-bold text-3xl text-indigo-400 text-shadow">{title}</h2> 
       <h1 className="capitalize font-bold text-4xl py-4">{intro}</h1> 
    </div>
  )
}
export default Headings