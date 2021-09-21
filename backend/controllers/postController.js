import asyncHandler from 'express-async-handler';

import User from '../models/userModel.js';
import Post from '../models/postModel.js';

// @desc    Create a post
// @route   POST api/posts
// @access  Private
export const createPost = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');

  const newPost = new Post({
    text: req.body.text,
    name: user.name,
    avatar: user.avatar,
    user: req.user.id,
  });

  const post = await newPost.save();
  res.json(post);
});

// @desc    Get all posts
// @route   GET api/posts
// @access  Private
export const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().sort({ date: -1 });
  res.json(posts);
});

// @desc    Get a single post
// @route   GET api/posts/:id
// @access  Private
export const getPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }
  res.json(post);
});

// @desc    Delete a single post
// @route   DELETE api/posts/:id
// @access  Private
export const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await post.remove();
  res.json({ msg: 'Post removed' });
});

// @desc    Like a post
// @route   PUT api/posts/like/:id
// @access  Private
export const likePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (
    post.likes.filter((like) => like.user.toString() === req.user.id).length > 0
  ) {
    res.status(400).json({ msg: 'Post already liked' });
  }
  post.likes.unshift({ user: req.user.id });
  await post.save();

  res.json(post.likes);
});

// @desc    Unlike a post
// @route   PUT api/posts/unlike/:id
// @access  Private
export const unlikePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (
    post.likes.filter((like) => like.user.toString() === req.user.id).length ===
    0
  ) {
    return res.status(400).json({ msg: 'Post has not yet been liked' });
  }
  const removeIndex = post.likes
    .map((like) => like.user.toString())
    .indexOf(req.user.id);
  post.likes.splice(removeIndex, 1);
  await post.save();

  res.json(post.likes);
});

// @desc    Comment on a post
// @route   POST api/posts/comments/:id
// @access  Private
export const addComment = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  const post = await Post.findById(req.params.id);

  const newComment = {
    text: req.body.text,
    name: user.name,
    avatar: user.avatar,
    user: req.user.id,
  };

  post.comments.unshift(newComment);

  await post.save();
  res.json(post.comments);
});

// @desc    Delete comment
// @route   DELETE api/posts/comment/:id/:comment_id
// @access  Private
export const deleteComment = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  const comment = post.comments.find(
    (comment) => comment.id === req.params.comment_id
  );

  if (!comment) {
    res.status(404);
    throw new Error('Comment does not exist');
  }

  if (comment.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const removeIndex = post.comments
    .map((comment) => comment.user.toString())
    .indexOf(req.user.id);
  post.comments.splice(removeIndex, 1);
  await post.save();

  res.json(post.comments);
});

