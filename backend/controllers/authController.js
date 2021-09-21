import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const getUserByToken = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

export const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error('Invalid Credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400);
    throw new Error('Invalid Credentials');
  }

  const payload = {
    user: {
      id: user.id,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: '5 days' },
    (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
  );
});
