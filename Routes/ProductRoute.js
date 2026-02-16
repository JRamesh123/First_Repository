const express=require("express");
const { getProduct, getDetails, postDetails } = require("../Controller/Product");

const routes=express.Router();

routes.use(express.urlencoded({extended:false}));


routes.get("/product",getProduct);

routes.get("/details",getDetails);

routes.post("/postDetails",postDetails);


routes.get("/add",(req,res,next)=>{
    res.send("<form action='/product' method='POST'><input name='title'/><button type='submit'>Submit</button></form>");
})

module.exports=routes;