import jwt from 'jsonwebtoken'
const {verify}=jwt

export function verifyToken(req,res,next){
  //token verification logic
  const token=req.cookies?.token
  //if req from unauthorized user
  if(!token){
    return res.status(401).json({message:"please login"})
  }
  try{
  //if token exists 
    const decodedToken=verify(token,'abcdef')
    console.log(decodedToken)
    next();
} 
catch(err){
     res.status(401).json({message:"session expired.please re-login"})
   }
}



// import jwt from 'jsonwebtoken';
// const { verify } = jwt;

// export function verifyToken(req, res, next) {
//   const token = req.cookies?.token;
//   if (!token) {
//     return res.status(401).json({ message: "please login" });
//   }
//   try {
//     const decodedToken = verify(token, 'abcdef');
//     // Attach decoded payload to request
//     req.user = decodedToken;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: "session expired. please re-login" });
//   }
// }