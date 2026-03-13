//create mini express app(seperate route)
import exp from "express";
import { userModel } from "../models/UserModel.js";
export const userApp = exp.Router();

// import bcrypt and jwt in ES module style
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware.js/verifyToken.js";
import dotenv from 'dotenv'
import {config} from 'dotenv'
config();

//define user rest API Routes

//create new user
userApp.post("/users",async (req, res) => {
  //get new user obj from req
  const newUser = req.body;
  //hash the password
  const hashedpassword = await bcrypt.hash(newUser.password, 12);
  //replace plain password with hashed password
  newUser.password = hashedpassword;
  //create new user document
  const newUserDocument = new userModel(newUser);
  //save
  const result = await newUserDocument.save();
  //send res
  res.status(201).json({ message: "User created" });
});


// userApp.post("/users", async (req, res) => {
//   try {
//     const newUser = req.body;

//     if (!newUser.username || !newUser.password) {
//       return res.status(400).json({ message: "Username and password required" });
//     }

//     const hashedPassword = await bcrypt.hash(newUser.password, 12);
//     newUser.password = hashedPassword;

//     const newUserDocument = new userModel(newUser);
//     await newUserDocument.save();

//     res.status(201).json({ message: "User created" });
//   } catch (error) {
//     res.status(500).json({ message: "Error creating user", error: error.message });
//   }
// });

//read all users
userApp.get("/users",verifyToken, async (req, res) => {
  //read all users from db
  let usersList = await userModel.find();
  res.status(200).json({ message: "user", payload: usersList });
});

//get by id
userApp.get("/users/:id",verifyToken, async (req, res) => {
  //read object id from req params
  const emailofUser = req.user?.email;
  //find user by id
  const userObj = await userModel.findOne({ email: emailofUser });
  //if user not found
  if (!userObj) {
    return res.status(400).json({ message: "user not found" });
  }
  //send res
  res.status(200).json({ message: "user", payload: userObj });
});

//update a user by id
userApp.put("/users/:id",verifyToken, async (req, res) => {
  const modifiedUser = req.body;
  const uid = req.params.id;
  const updateduser = await userModel.findByIdAndUpdate(
    uid,
    { $set: { ...modifiedUser } },
    { new: true, runValidators: true }
  );
  res.status(200).json({ message: "user", payload: updateduser });
});

//find and delete user by id
userApp.delete("/users/:id",verifyToken, async (req, res) => {
  const uid = req.params.id;
  const deletedUser = await userModel.findByIdAndDelete(uid);
  res.status(200).json({ message: "user deleted", payload: deletedUser });
});

//use findone method to read a document with non object id fields
//USER AUTHENTICATION
userApp.post("/auth", async (req, res) => {
  //get user cred obj from client
  const { email, password } = req.body;
  //verify email
  let user = await userModel.findOne({ email: email });
  //if email not existed
  if (user === null) {
    return res.status(404).json({ message: "Invalid email" });
  }
  //compare the password
  let result = await bcrypt.compare(password, user.password);
  //if passwords not matched
  if (result === false) {
    return res.status(400).json({ message: "Invalid password" });
  }
  //if passwords are matched
  //create a jwt token
  const signedToken = jwt.sign(
    { email: user.email },
    process.env.SECRET_KEY,
    { expiresIn:"1H"}
  );
  

//store token as httponlycookie
res.cookie("token",signedToken,{
  httpOnly:true,
  sameSite:"lax",
  secure:false
})
//send res  
res.status(200).json({message:"login success",payload:user})


userApp.put("cart/product-id/:pid",async(req,res)=>{
  //get product ID fro url pattern
  let productId=req.params.pid;
  //get current user details
  const emailofUser=req.user?.email
  //if user is invalid
   let result=await userModel.findOneAndUpdate({email:emailofUser},{$push:{cart:{product:productId,count:1}}},{new:true})
   if(!result)
  {
    return res.status(404).json({message:"user not found"})
  }
  //add product to cart
 
 
  res.status(200).json({message:"product added to cart"})
})






});
