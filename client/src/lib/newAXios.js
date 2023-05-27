import axios from 'axios'


export const newAxios =  axios.create({

    baseURL:'https://blog-api-ndhd.onrender.com/api',
    withCredentials:true
})
