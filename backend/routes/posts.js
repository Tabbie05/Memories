import express from 'express'
import { getPosts } from '../controller/postsController.js'
import { createPost } from '../controller/postsController.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/',createPost)

export default router