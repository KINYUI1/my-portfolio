import {useRouteError,Link} from 'react-router-dom'
import notFound from '../images/undraw_page_not_found_re_e9o6.svg'
import { FaHome } from 'react-icons/fa'

const Error = () => {
    const err = useRouteError()
    
    if(err.status === 404){
        return (
          <div className='min-h-screen bg-dark-100 flex items-center justify-center px-4 page-transition'>
            <div className='max-w-2xl mx-auto text-center space-y-8'>
              <img 
                src={notFound} 
                alt="Page not found" 
                className='w-full max-w-md mx-auto animate-fade-in opacity-80'
              />
              <div className='space-y-4'>
                <h1 className='font-serif text-7xl font-bold text-gold-gradient'>404</h1>
                <h2 className='font-serif text-3xl font-bold text-champagne-100'>Page Not Found</h2>
                <p className='text-champagne-400 text-lg'>
                  The page you're looking for doesn't exist or has been moved.
                </p>
              </div>
              <Link to='/'>
                <button className='btn-elegant flex items-center justify-center gap-3 mx-auto'>
                  <FaHome />
                  Return Home
                </button>
              </Link>
            </div>
          </div>
        )
    }
    
  return (
    <div className='min-h-screen bg-dark-100 flex items-center justify-center px-4 page-transition'>
      <div className='max-w-2xl mx-auto text-center space-y-8'>
        <div className='space-y-4'>
          <h1 className='font-serif text-7xl font-bold text-gold-gradient'>Oops!</h1>
          <h2 className='font-serif text-3xl font-bold text-champagne-100'>Something went wrong</h2>
          <p className='text-champagne-400 text-lg'>
            We're sorry, but something unexpected happened.
          </p>
          {err?.message && (
            <p className='text-sm text-champagne-500 glass-card p-4 mt-4'>
              {err.message}
            </p>
          )}
        </div>
        <Link to='/'>
          <button className='btn-elegant flex items-center justify-center gap-3 mx-auto'>
            <FaHome />
            Return Home
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Error