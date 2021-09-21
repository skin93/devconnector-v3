import express from 'express';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';
import {
  getUserByToken,
  authenticateUser,
} from '../controllers/authController.js';

router.route('/').get(protect, getUserByToken).post(authenticateUser);

export default router;
