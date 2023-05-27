import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { newAxios } from "../lib/newAXios";
import { useAuth } from "../hooks/useAuth";
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menu, setMenu] = useState(false);
  const {dispatch,user}= useAuth()

const location = useLocation()
const {search} = useLocation()
const cat = search?.split('=').pop()
console.log(cat)

useEffect(()=>{
  setMenu(false)
},[location])


  useEffect(() => {
    const observe = () => {
      if (scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    document.addEventListener("scroll", observe);

    return () => {
      document.removeEventListener("scroll", observe);
    };
  }, []);

const handleLogout = async()=>{

try {
  const res = await newAxios('/auth/logout')
  console.log(res.data)
} catch (error) {
  console.log(error)
}

dispatch({type:'LOG_OUT'})
localStorage.removeItem('user')
}




  return (
    <div
      className={`sticky top-0 z-10 backdrop-blur-md bg-white/80 ${
        scrolling && "shadow-md"
      } duration-500 shadow-zinc-600`}
    >
      <div
        className={`flex  p-4 justify-between max-w-[1000px] mx-auto flex-col lg:flex-row relative`}
      >
        <div
          className="absolute right-8 w-8 h-8 top-10 flex flex-col justify-between cursor-pointer md:hidden"
          onClick={() => setMenu((prev) => !prev)}
        >
          <span className="w-full bg-black h-[1px]"></span>
          <span className="w-full bg-black h-[1px]"></span>
          <span className="w-full bg-black h-[1px]"></span>
        </div>
        {user&&<p className="md:hidden absolute top-8 fonted capitalize text-xl px-3 py-2 rounded-md">{user.username}</p>}
        <Logo />

        <ul
          className={`flex items-center md:gap-2  lg:gap-5 text-center flex-col md:flex-row md:h-auto px-10 md:px-0 duration-300 ${
            menu ? "h-[400px]" : "h-0"
          } ${menu ? "py-4" : "py-0"}  overflow-hidden`}
        >
          <li className={`li ${cat ==='art' && 'border-b-2 border-teal-500'}`}>
            <Link  className="link" to={`/?cat=art`}>art</Link>
          </li>
          <li className={`li ${cat ==='science' && 'border-b-2 border-teal-500'}`}>
            <Link className="link" to={`/?cat=science`}>science</Link>
          </li>
          <li className={`li ${cat ==='technology' && 'border-b-2 border-teal-500'}`}>
            <Link className="link" to={`/?cat=technology`}>technology</Link>
          </li>
          <li className={`li ${cat ==='cinema' && 'border-b-2 border-teal-500'}`}>
            <Link className="link" to={`/?cat=cinema`}>cinema</Link>
          </li>
          <li className={`li ${cat ==='design' && 'border-b-2 border-teal-500'}`}>
            <Link className="link" to={`/?cat=design`}>design</Link>
          </li>
        
          <li className={`li ${cat ==='food' && 'border-b-2 border-teal-500'}`}>
            <Link className="link" to={`/?cat=food`}>food</Link>
          </li>
          <li className='hidden lg:block  bg-gray-500 w-[1px] h-5'></li>
         { user ?(<><li className=" hidden md:block capitalize bg-teal-300 text-white px-3 py-2 rounded-md">{user?.username}</li>
          <li onClick={handleLogout} className="py-3 li">Logout</li></>) : <Link className="li py-3" to={'/login'}>Login</Link>}
          <li className="mt-2 lg:mt-0 lg:w-12 md:h-12 w-full h-12 flex mx-auto items-center justify-center
           bg-teal-200 rounded-full border border-white duration-300 hover:border-teal-500
            hover:bg-white hover:text-teal-500">

            <Link className="link" to={"/write"}>Write</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
