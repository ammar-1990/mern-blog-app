import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = () => {

  const location = useLocation()

  useEffect(()=>{
window.scrollTo(0,0)

  },[location])


  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className='max-w-[1000px] mx-auto w-full flex-1'>  
        <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout