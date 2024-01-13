import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
const HomeLayout = () => {
  return (
    <div className="bg-slate-50 font-thin">
      <Navbar/>
      <Outlet/>
    </div>
  )
}
export default HomeLayout