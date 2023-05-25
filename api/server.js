import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import authRouter from './routes/Auth.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()
app.use(cookieParser())




mongoose.connect(process.env.MONGO).then(()=>{

    console.log('mongodb is connected')
    app.listen(8800,()=>{
        console.log('server is wroking')
    })

}).catch((err)=>{
console.log(err)
})


app.use(express.json())
app.use(cors({origin:'http://127.0.0.1:5173',credentials:true}))




app.use('/api/auth',authRouter)
















app.use((err,req,res,next)=>{
const errorStatus = err.status || 500;
const errorMessage = err.message || 'something went wrong'


res.status(errorStatus).send(errorMessage)

})



