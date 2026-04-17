


import { productapp } from './API/productAPI.js'

// app is special name which holds express application
//express application internally contains HTTP server
const app = exp()
const port = 3000

// mount router
app.use('/product-api', productapp)

//assign port number to http server
app.listen(port,()=>console.log(`Server listening on port ${port}...`))
import exp from 'express'
import { userApp } from "./API/userapi.js";

// app is special name which holds express application
//express application internally contains HTTP server
//middleware
function middleware1(req,res,next)
{   
    //send res from middleware
     
    
    console.log("middleware1 executed");
     //forward req to next
    next()
}
function middleware2(req,res,next)
{   
    //send res from middleware
     
    
    console.log("middleware2 executed");
    //forward req to next
    
}
  app.use(middleware1)
  app.use(middleware2)
// mount router
app.use('/user-api', userApp)

//assign port number to http server
app.listen(port,()=>console.log(`Server listening on port ${port}...`))



