import exp from "express";
import { productModel } from "../models/productModel.js";
import { verifyToken } from "../middleware.js/verifyToken.js";

export const productApp = exp.Router();

//user login




// Create new product
productApp.post("/products",verifyToken, async (req, res) => {
  try {
    const newProduct = req.body;
    const newProductDocument = new productModel(newProduct);
    const result = await newProductDocument.save();
    res.status(201).json({ message: "Product created", payload: result });
  } catch (err) {
    res.status(400).json({ message: "error occurred", error: err.message });
  }
});

// Read all products
productApp.get("/products", verifyToken,async (req, res) => {
  const productsList = await productModel.find();
  res.status(200).json({ message: "products list", payload: productsList });
});

// Read product by ObjectId
productApp.get("/products/:id",verifyToken, async (req, res) => {
  const pid = req.params.id;
  const productObj = await productModel.findById(pid);
  if (!productObj) {
    return res.status(404).json({ message: "product not found" });
  }
  res.status(200).json({ message: "product found", payload: productObj });
});

// Update product by ObjectId
productApp.put("/products/:id",verifyToken, async (req, res) => {
  const pid = req.params.id;
  const modifiedProduct = req.body;
  const updatedProduct = await productModel.findByIdAndUpdate(
    pid,
    { $set: modifiedProduct },
    { new: true, runValidators: true }
  );
  res.status(200).json({ message: "product updated", payload: updatedProduct });
}); 

// Delete product by ObjectId
productApp.delete("/products/:id", verifyToken,async (req, res) => {
  const pid = req.params.id;
  const deletedProduct = await productModel.findByIdAndDelete(pid);
  res.status(200).json({ message: "product deleted", payload: deletedProduct });
});

productApp.post("/auth", async (req, res) => {
  //get user cred obj from client
  const { productId,productName } = req.body;
  //verify email
  let product= await productModel.findOne({ productId:productId });
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
    "abcdef",
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
});
