import {useRouteError,Link} from 'react-router-dom'
import notFound from '../images/undraw_page_not_found_re_e9o6.svg'

const Error = () => {
    const err = useRouteError()
    if(err.status === 404){
        return <div>
        <img src={notFound} alt="not found" className='flex ml-10'/>
        <button className='font-bold w-auto bg-slate-400 h-10 px-3 mt-10 flex justify-center items-center'><Link to='/' >Back Home</Link></button>
        </div>
    }
  return (
    <div>Error</div>
  )
}
export default Error