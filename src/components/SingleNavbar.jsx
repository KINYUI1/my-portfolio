import {NavLink} from 'react-router-dom'

const SingleNavbar = ({item}) => {
    const {url,name} = item
  return (
    <NavLink 
      className={({ isActive }) => 
        `transition-all duration-500 relative group py-2 ${
          isActive ? 'text-gold-400' : 'text-champagne-400 hover:text-champagne-100'
        }`
      }
      to={url}
    >
      {name}
      <span className={`absolute bottom-0 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-500`}></span>
    </NavLink>
  )
}
export default SingleNavbar