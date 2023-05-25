import { useState,useEffect } from "react"
import { newAxios } from "../lib/newAXios"
const useFetch = (url) => {
const [data,setData] = useState(null)
const [loading,setLoading] = useState(false)
const [error,setError] = useState('')


useEffect(()=>{


    const getData = async()=>{
try {
    setError('')
    setLoading(true)
    const res = await newAxios(url)
    setData(res.data)
} catch (error) {
    setError(error)
}finally{
    setLoading(false)
}
    }


    getData()
},[url])



  return {data,error,loading}
}

export default useFetch