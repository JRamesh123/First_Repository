const express=require("express");

const routes=express.Router();

routes.use("/admin",(req,res)=>{
    res.send("<h1>This is a admin page</h1>")
})

module.exports=routes;
