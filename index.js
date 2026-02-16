const express=require("express");
const routes=require("./Routes/ProductRoute");
const routesAdmin=require("./Routes/admin");

const app=express();



app.use(routes);
app.use(routesAdmin);

app.use((req,res)=>{
    res.send("<h1>404 Not Found</h1>");
})

app.listen(3000,()=>{
    console.log("Server Started.......");
})

