import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = bcryptjs.hashSync(password,10);

  try {
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();
    res.json("Signup successful");
  } catch (err) {
    next(err);
  }
};
