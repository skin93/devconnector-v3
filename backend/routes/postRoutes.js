import express from 'express';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';

import {
  createPost,
  getPosts,
  getPost,
  deletePost,
  likePost,
  unlikePost,
  addComment,
  deleteComment,
} from '../controllers/postController.js';

router.route('/').get(protect, getPosts).post(protect, createPost);
router.route('/:id').get(protect, getPost).delete(protect, deletePost);
router.route('/like/:id').put(protect, likePost);
router.route('/unlike/:id').put(protect, unlikePost);
router.route('/comments/:id').post(protect, addComment);
router.route('/comment/:id/:comment_id').delete(protect, deleteComment);

export default router;
