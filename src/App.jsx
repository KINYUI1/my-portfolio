import Home from './pages/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Skills from './pages/Skills'
import HomeLayout from './pages/HomeLayout'
import About from './pages/About'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Error from './pages/Error'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Project from './pages/Project'

function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
       path:'/about',
        element:<About/>
      },
      {
       path:'/skills',
        element:<Skills/>
      },
      {
       path:'/projects',
        element:<Projects/>
      },
      {
       path:'/contact-me',
        element:<ContactMe/>
      },
      {
       path:'/project/:id',
        element:<Project/>
      },
    ]
  }])
  return (
    <>
    <RouterProvider router={router}/>
    <ToastContainer position='top-center'/>
    </>
  )
}

export default App
