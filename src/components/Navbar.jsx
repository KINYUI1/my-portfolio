import {data} from '../data/navbarData'
import SingleNavbar from './SingleNavbar'
import { nanoid } from 'nanoid'; 


const Navbar = () => {
  return (
    <div className='flex justify-between py-4 sticky top-0 shadow-xl px-4 z-20 bg-inherit'>
    <h1 className='font-bold text-3xl'>Clement K. Ndimuangu</h1>
    <nav className='flex gap-11 uppercase flex-col md:flex-row'>
        {data.map((item)=>{
            return <SingleNavbar key={nanoid()} item={item}/>
        })}
    </nav>
    </div>
  )
}
export default Navbar