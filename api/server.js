import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import authRouter from './routes/Auth.js'
import postsAuth from './routes/Post.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from 'multer'


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
    
      cb(null, Date.now() + file.originalname)
    }
  })




const upload = multer({ storage })
dotenv.config()
const app = express()
app.use(cookieParser())
app.use('/api/uploads', express.static('uploads'));


app.use(cors({origin:'https://ornate-baklava-4c1bf8.netlify.app/',credentials:true}))
mongoose.connect(process.env.MONGO).then(()=>{

    console.log('mongodb is connected')
    app.listen(8800,()=>{
        console.log('server is wroking')
    })

}).catch((err)=>{
console.log(err)
}) 

app.post('/api/upload', upload.single('file'), function (req, res,) {
    const file = req.file
res.status(200).json(file.filename)
  })


app.use(express.json())





app.use('/api/auth',authRouter)
app.use('/api/posts',postsAuth)
















app.use((err,req,res,next)=>{
const errorStatus = err.status || 500;
const errorMessage = err.message || 'something went wrong'


res.status(errorStatus).send(errorMessage)

})



