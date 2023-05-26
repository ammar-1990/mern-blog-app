import { useState,useEffect } from "react"
import { newAxios } from "../lib/newAXios"
import { useLocation } from "react-router-dom"
const useFetch = (url) => {
const [data,setData] = useState(null)
const [loading,setLoading] = useState(false)
const [error,setError] = useState('')
const location = useLocation()


useEffect(()=>{


    const getData = async()=>{
try {
    setLoading(true)
    setError('')
   
    const res = await newAxios(url)
    setData(res.data)
} catch (error) {
    setError(error)
    setLoading(false)
}finally{
    setLoading(false)
}
    }


    getData()
},[url])


useEffect(()=>{
setData(null)
setLoading(true)
setError('')

},[location])


  return {data,error,loading}
}

export default useFetch