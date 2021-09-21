import express from 'express';
const router = express.Router();
import { protect } from '../middlewares/authMiddleware.js';

import {
  getProfile,
  getProfiles,
  createProfile,
  deleteProfile,
  getProfileByID,
  updateExperience,
  updateEducation,
  deleteExperience,
  deleteEducation,
  getRepos,
} from '../controllers/profileController.js';

router.route('/me').get(protect, getProfile);

router
  .route('/')
  .get(getProfiles)
  .post(protect, createProfile)
  .delete(protect, deleteProfile);

router.route('/user/:user_id').get(getProfileByID);

router.route('/experience').put(protect, updateExperience);
router.route('/education').put(protect, updateEducation);

router.route('/experience/:exp_id').delete(protect, deleteExperience);
router.route('/education/:edu_id').delete(protect, deleteEducation);

router.route('/github/:username').get(getRepos);

export default router;
