import express from 'express';
import { addComment, createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost } from '../Controller/PostController.js';
const router = express.Router();

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete("/:id", deletePost)
router.put("/:id/like", likePost )
router.get("/:id/timeline", getTimelinePosts)

router.put('/:id/comment',addComment)

export default router;