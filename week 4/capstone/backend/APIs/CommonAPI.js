import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middlewares/VerifyToken.js";
const { sign } = jwt;
export const commonApp = exp.Router();
config();

//Route for register
commonApp.post("/users", async (req, res) => {
  let allowedRoles = ["USER", "AUTHOR"];
  //get user from req
  const newUser = req.body;
  //check role
  if (!allowedRoles.includes(newUser.role)) {
    return res.status(400).json({ message: "Invalid role" });
  }
  //check if user already exists
  const existingUser = await UserModel.findOne({ email: newUser.email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  //hash password and replace plain with hashed one
  newUser.password = await hash(newUser.password, 12);
  //create New user document
  const newUserDoc = new UserModel(newUser);
  //save document
  await newUserDoc.save();
  //send res
  res.status(201).json({ message: "User created" });
});

//Route for Login(USER, AUTHOR and ADMIN)
commonApp.post("/login", async (req, res) => {
  //console.log(req.body)
  //get user cred obj
  const { email, password } = req.body;
  //find user by email
  const user = await UserModel.findOne({ email: email });
  //if use not found
  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }
  //check if user is active
  if (!user.isUserActive) {
    return res.status(403).json({ message: "Account is blocked" });
  }
  //compare password
  const isMatched = await compare(password, user.password);
  //if passwords not matched
  if (!isMatched) {
    return res.status(400).json({ message: "Invalid password" });
  }
  //create jwt
  const signedToken = sign({id:user._id, email: email, role: user.role }, process.env.SECRET_KEY, { expiresIn: "1h" });

  //set token to res header as httpOnly cookie
  res.cookie("token", signedToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  //remove password from user document
  let userObj = user.toObject();
  delete userObj.password;

  //send res
  res.status(200).json({ message: "login success", payload: userObj });
});

//Route for Logout
commonApp.get("/logout",  (req, res) => {
  //delete token from cookie storage
  res.clearCookie("token", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  //send res
  res.status(200).json({message:"Logout success"})
});


//change password
commonApp.put("/password", verifyToken("USER","AUTHOR","ADMIN"), async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  // find the user by ID from token
  const user = await UserModel.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // check if old password matches
  const isMatched = await compare(oldPassword, user.password);
  if (!isMatched) {
    return res.status(400).json({ message: "Current password is incorrect" });
  }

  // prevent same old and new password
  if (await compare(newPassword, user.password)) {
    return res.status(400).json({ message: "Old password and new password cannot be same" });
  }
  //run validators manually
  
  // hash new password
  const hashedPassword = await hash(newPassword, 12);

  // update and save
  user.password = hashedPassword;
  await user.save();

  res.status(200).json({ message: "Password changed successfully" });
});
