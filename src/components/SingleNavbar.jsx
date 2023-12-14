import {NavLink} from 'react-router-dom'

const SingleNavbar = ({item}) => {
    const {url,name} = item
  return (
    <div className='hover:scale-110 ease-in duration-200'>
        <NavLink className='hover:shadow-xl shadow-stone-900 hover:text-stone-400' to={url}>{name}</NavLink>
    </div>
  )
}
export default SingleNavbar