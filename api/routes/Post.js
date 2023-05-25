import express from 'express'
import { getPosts,getPost,addPost,deletePost,updatePost } from '../controllers/postsController.js'
import { jwtVerify } from '../middleware/jwtVerify.js'

const router = express.Router()


router.get('/',getPosts)
router.get('/:id',getPost)
router.post('/',addPost)
router.delete('/:id',jwtVerify,deletePost)
router.patch('/:id',jwtVerify,updatePost)


export default router