import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"

const HomeLayout = () => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState("fadeIn")

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut")
    }
  }, [location, displayLocation])

  return (
    <div className="bg-slate-50 font-thin">
      <Navbar/>
      <div
        className={`transition-opacity duration-300 ${
          transitionStage === "fadeOut" ? "opacity-0" : "opacity-100"
        }`}
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn")
            setDisplayLocation(location)
          }
        }}
      >
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}
export default HomeLayout