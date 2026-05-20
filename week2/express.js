import exp from 'express'
export const productapp=exp.Router()


productapp.use(exp.json()) 
const port=3000

//create a new user
let products=[]

//read all products
productapp.get('/products',(req,res)=>{
    res.json({message:"all products",payload:products})
})
//read all products by brand
productapp.get("/products/:brand",(req,res)=>{

    let  brandofUrl=(req.params.brand)
    
    let product=products.find(productObj=>productObj.brand===brandofUrl)
    if(product==undefined){
        return res.json({message:"product not found"})
    }
    res.json({message:"a product",payload:product})
    
})
//enter a new product
productapp.post('/products',(req,res)=>{
    
    const newProduct=req.body

    products.push(newProduct)

    res.json({message:"product is created"})
})
//update the product
productapp.put('/products',(req,res)=>{

    let modifiedProduct=req.body;
  
   let index= products.findIndex(temp=>temp.id===modifiedProduct.id)
    
    if(index===-1){
     return res.json({message:"product not found"})
    }
     
    products.splice(index,1,modifiedProduct)
   
    res.json({message:"products Updated"})
})
//delete the product by id
    productapp.delete('/products/:id',(req,res)=>{
      
          let idOfUrl=Number(req.params.id) 
          
          let index=products.findIndex(temp=>temp.id===idOfUrl)
          
          if(index===-1){
     return res.json({message:"products not found to delete"})
    }
      
    products.splice(index,1)
    
    res.json({message:"product removed"})
})
