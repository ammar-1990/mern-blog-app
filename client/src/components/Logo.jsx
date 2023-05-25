import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link className="flex-shrink-0 w-fit mx-auto lg:mx-0" to='/'>
    <div className="relative flex justify-center h-20 items-center ">
    <h1 className="fonted text-4xl relative z-10 ">Alpha Blog</h1>
    <span className="absolute w-20 h-20 rounded-full  bg-teal-200 " />
  </div>
  </Link>
  )
}

export default Logo