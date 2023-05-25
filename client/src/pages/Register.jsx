
import { Link } from "react-router-dom"
import { useState } from "react"
import {newAxios} from '../lib/newAXios'
import { useAuth } from "../hooks/useAuth.jsx"
import { useNavigate } from "react-router-dom"

const Register = () => {
 

    const [email, setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [img,setImg] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

const {dispatch}=useAuth()



const navigate = useNavigate()
    const handleSubmit = async(e)=>{
      e.preventDefault()
      setError('')
setLoading(true)
      try {
        const res =await newAxios.post('/auth/register',{email,username,password,img})
        console.log(res.data)
dispatch({type:'LOG_IN',payload:res.data})
localStorage.setItem('user',JSON.stringify(res.data))
navigate('/',{replace:true})
      } catch (error) {
        setError(error)
        console.log(error)
      }finally{
        setLoading(false)
        setEmail('')
        setUsername('')
        setPassword('')
        setImg('')
      }



    }
    
      return (
        <div className="h-screen bg-teal-400 flex justify-center p-5">
    
         
              <form onSubmit={handleSubmit} className="flex flex-col gap-12 max-w-[450px] w-full mt-20 bg-white p-5 rounded-2xl self-start">
              <h1 className="text-5xl text-teal-800 font-bold">Register</h1>  
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className="input" required type="email" placeholder="Enter your email" />
                <input onChange={e=>setUsername(e.target.value)} value={username} className="input" required type="name" placeholder="Enter your name" />
                <input onChange={e=>setPassword(e.target.value)} value={password} className="input" required min={6} type="password" placeholder="Enter your password" />
                <button disabled={!email || !password || !username || loading} className="btn disabled:bg-gray-400">{loading ?'Loading...' : "Register"}</button>
    
                <p>Already have an account? <Link className="hover:underline" to={'/login'}>Login.</Link></p>
    {error&&<p className="bg-red-100 text-red-500 border-red-500 p-2 border rounded-lg">{error.response.data}</p>}
    
              </form>
    
    
    
        </div>
  )
}

export default Register