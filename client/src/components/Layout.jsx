import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className='max-w-[1100px] mx-auto w-full'>  
        <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout