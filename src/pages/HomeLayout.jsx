import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
const HomeLayout = () => {
  return (
    <div className="bg-blue-50 font-thin">
      <Navbar/>
      <Outlet/>
    </div>
  )
}
export default HomeLayout