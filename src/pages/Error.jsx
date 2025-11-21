import {useRouteError,Link} from 'react-router-dom'
import notFound from '../images/undraw_page_not_found_re_e9o6.svg'
import { FaHome } from 'react-icons/fa'

const Error = () => {
    const err = useRouteError()
    
    if(err.status === 404){
        return (
          <div className='min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 flex items-center justify-center px-4 page-transition'>
            <div className='max-w-2xl mx-auto text-center space-y-8'>
              <img 
                src={notFound} 
                alt="Page not found" 
                className='w-full max-w-md mx-auto animate-fade-in'
              />
              <div className='space-y-4'>
                <h1 className='text-6xl font-bold text-gray-900'>404</h1>
                <h2 className='text-3xl font-bold text-gray-700'>Page Not Found</h2>
                <p className='text-gray-600 text-lg'>
                  Oops! The page you're looking for doesn't exist or has been moved.
                </p>
              </div>
              <Link to='/'>
                <button className='flex items-center justify-center gap-3 mx-auto px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                  <FaHome />
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        )
    }
    
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 flex items-center justify-center px-4 page-transition'>
      <div className='max-w-2xl mx-auto text-center space-y-8'>
        <div className='space-y-4'>
          <h1 className='text-6xl font-bold text-gray-900'>Oops!</h1>
          <h2 className='text-3xl font-bold text-gray-700'>Something went wrong</h2>
          <p className='text-gray-600 text-lg'>
            We're sorry, but something unexpected happened.
          </p>
          {err?.message && (
            <p className='text-sm text-gray-500 bg-white rounded-lg p-4 mt-4'>
              {err.message}
            </p>
          )}
        </div>
        <Link to='/'>
          <button className='flex items-center justify-center gap-3 mx-auto px-8 py-4 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
            <FaHome />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Error