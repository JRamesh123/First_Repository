const arr=[];

exports.getProduct=(req,res,next)=>{
    res.status(200).json("hello");
}

exports.getDetails=(req,res)=>{
    res.status(200).json({message:"successfully Fetched",data:arr});
}

exports.postDetails=(req,res,next)=>{
    console.log(req.body);
    arr.push(req.body);
    console.log(arr);
    res.status(200).json({message:"sucessfully Submitted data"});
}