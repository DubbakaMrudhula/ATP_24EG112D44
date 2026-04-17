//create a express app
 import exp from 'express'
 import {connect} from 'mongoose'
  import { userApp } from './APIs/userAPI.js'
  import { productApp } from './APIs/productAPI.js'
  import cookieParser from 'cookie-parser'
  import {config} from 'dotenv'
config(); //process.env.PORT,process.env.DB{_URL}
const app=exp()
app.use(exp.json());
app.use(cookieParser())
//forward req to userApp if path starts with /user-api
app.use('/user-api', userApp);
app.use('/product-api',productApp)

//start server
app.listen(4000,()=>console.log("server on port 4000.."))

//connect to DB server
//connect().then().catch() old method90

const port=process.env.PORT || 4000
async function connectDB(){
    try{
        await connect(process.env.DB_URL)
        console.log("database connection successfull");
    }
    catch(err)
    {
        console.log("err in DB connection :",err);
    }
}
connectDB();

//error handling in middleware
app.use((err,req,res,next)=>{
    res.json({message:"error occured",error:err.message})
    next();
})



// // fetch("https://jsonplaceholder.typicode.com/posts")
// // .then(res=>res.json())
// // .then(data=>console.log(data))
// // .catch(err=>console.log(err))


// //async and await
// async function getData(){
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data=await res.json()
//     console.log(data)

// }
// getData();