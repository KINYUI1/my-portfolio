import {NavLink} from 'react-router-dom'

const SingleNavbar = ({item}) => {
    const {url,name} = item
  return (
    <NavLink 
      className={({ isActive }) => 
        `hover:text-indigo-600 transition-all duration-300 relative group ${
          isActive ? 'text-indigo-600' : 'text-gray-700'
        }`
      }
      to={url}
    >
      {name}
      <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300'></span>
    </NavLink>
  )
}
export default SingleNavbar