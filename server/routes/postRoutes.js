import express from 'express';
import { upload } from '../congigs/multer.js';
import { protect } from '../middlewares/auth.js';
import { addPosts, getFeedPosts, likePost } from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.post('/add', upload.array('images', 4), protect, addPosts )
postRouter.get('/feed', protect, getFeedPosts )
postRouter.post('/like', protect, likePost)
export default postRouter;