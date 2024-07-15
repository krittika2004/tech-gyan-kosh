import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const signin = async (req,res,next)=>{
  const { email, password } = req.body;
  if(!email || !password || email == '' || password == '') {
    return next(errorHandler(400,'All fields are required'));
  }
  try{
    //try to find the user from the db with the given email
    const validUser = await User.findOne({email});
    if(!validUser){
      return next(errorHandler(404,'User Not Found!! '))
    }
    ///if user with the given email found then compare the password using compare sync of bycryptjs 
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    //if not valid==>error

    if(!validPassword){
      return next(errorHandler(400,'Invalid Password')); //400 = bad request
    }
    //now email add password matched - save this encrypted email password to cookie of the browser-- cookie assigned based on secret key 
    //secret key is unique to u
    const jwtSecret = "techGyaan";

    //if successful don't want to send password with valid user
    const {password: pass, ...userWithoutPassword} = validUser._doc;
    const token = jwt.sign(
      {id: validUser._id}, jwtSecret);
      res.status(200).cookie('access_token', token, {
      httpOnly: true
      }).json(userWithoutPassword);
      console.log("jwt secret code: ",jwtSecret);

  }catch(err){
    next(err);
  }
}