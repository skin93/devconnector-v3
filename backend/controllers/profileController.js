import fetch from 'isomorphic-fetch';
import asyncHandler from 'express-async-handler';

import Profile from '../models/profileModel.js';
import User from '../models/userModel.js';
import Post from '../models/postModel.js';

// @desc    Get current users profile
// @route   GET api/profile/me
// @access  Private
export const getProfile = asyncHandler(async (req, res) => {
  let id = req.user._id;

  const profile = await Profile.findOne({
    user: id,
  }).populate('user', ['name', 'avatar']);

  if (!profile) {
    res.status(400);
    throw new Error('Profile does not exist');
  }

  res.json(profile);
});

// @desc    Get all profiles
// @route   GET api/profile
// @access  Public
export const getProfiles = asyncHandler(async (req, res) => {
  const profiles = await Profile.find().populate('user', ['name', 'avatar']);

  res.json(profiles);
});

// @desc    Create or update user profile
// @route   POST api/profile
// @access  Private
export const createProfile = asyncHandler(async (req, res) => {
  const {
    company,
    website,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = req.body;

  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (company) profileFields.company = company;
  if (website) profileFields.website = website;
  if (location) profileFields.location = location;
  if (bio) profileFields.bio = bio;
  if (status) profileFields.status = status;
  if (githubusername) profileFields.githubusername = githubusername;
  if (skills) {
    profileFields.skills = skills.split(',').map((skill) => skill.trim());
  }

  // Build social object
  profileFields.social = {};
  if (youtube) profileFields.social.youtube = youtube;
  if (twitter) profileFields.social.twitter = twitter;
  if (facebook) profileFields.social.facebook = facebook;
  if (linkedin) profileFields.social.linkedin = linkedin;
  if (instagram) profileFields.social.instagram = instagram;

  let profile = await Profile.findOneAndUpdate(
    { user: req.user.id },
    { $set: profileFields },
    { new: true, upsert: true }
  );

  return res.json(profile);
});

// @desc    Get profile by user ID
// @route   GET api/profile/user/:user_id
// @access  Public
export const getProfileByID = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.user_id).populate('user', [
    'name',
    'avatar',
  ]);

  if (!profile) {
    res.status(400);
    throw new Error('Profile not found');
  }
  res.json(profile);
});

// @desc    Delete profile, user & posts
// @route   DELETE api/profile
// @access  Private
export const deleteProfile = asyncHandler(async (req, res) => {
  await Post.deleteMany({ user: req.user._id });

  await Profile.findOneAndRemove({
    user: req.user._id,
  });

  await User.findOneAndRemove({
    _id: req.user._id,
  });

  res.json({ msg: 'User deleted' });
});

// @desc    Update profile experience
// @route   PUT api/profile/experience
// @access  Private
export const updateExperience = asyncHandler(async (req, res) => {
  const { title, company, location, from, to, current, description } = req.body;

  const newExp = {
    title,
    company,
    location,
    from,
    to,
    current,
    description,
  };

  const profile = await Profile.findOne({ user: req.user.id });
  profile.experience.unshift(newExp);

  await profile.save();

  res.json(profile);
});

// @desc    Delete profile experience
// @route   DELETE api/profile/experience/:exp_id
// @access  Private
export const deleteExperience = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({ user: req.user.id });

  const removeIndex = profile.experience
    .map((item) => item.id)
    .indexOf(req.params.exp_id);

  profile.experience.splice(removeIndex, 1);

  await profile.save();

  res.json(profile);
});

// @desc    Update profile education
// @route   PUT api/profile/education
// @access  Private
export const updateEducation = asyncHandler(async (req, res) => {
  const { school, degree, fieldofstudy, from, to, current, description } =
    req.body;

  const newEdu = {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  };

  const profile = await Profile.findOne({ user: req.user.id });

  profile.education.unshift(newEdu);

  await profile.save();

  res.json(profile);
});

// @desc    Delete profile education
// @route   DELETE api/profile/education/:exp_id
// @access  Private
export const deleteEducation = asyncHandler(async (req, res) => {
  const profile = await Profile.findOne({ user: req.user.id });

  const removeIndex = profile.education
    .map((item) => item.id)
    .indexOf(req.params.exp_id);

  profile.education.splice(removeIndex, 1);

  await profile.save();

  res.json(profile);
});

// @desc    Get user repos from Github
// @route   GET api/profile/github/:username
// @access  Public
export const getRepos = asyncHandler(async (req, res) => {
  const uri = `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`;

  const response = await fetch(uri, {
    method: 'GET',
    headers: { 'user-agent': 'node.js' },
  });

  const data = await response.json();

  if (!data) {
    res.status(404);
    throw new Error('No Github profile found');
  }

  res.json(data);
});
