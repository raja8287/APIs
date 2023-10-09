import express from "express";
import mongoose from "mongoose";
import { dm } from "./db_comfig.js";
const app=express();
const PORT=5000;
//app.use(express.urlencoded({extended:true}));




app.get("/",async(req,resp)=>{
    console.log(req.body)
    const da=await dm.find()
    resp.json({
        da
    })

});

app.post('/tt/udata',async(req,resp)=>{
    console.log(req.body)
    resp.send("hi")
    /*
    const dd=await dm.create({
name:req.body.Name,

email:req.body.email}
    )
console.log(dd);
if(!dd){
    return resp.json({
        message:"data is not saved"
    })
}
return resp.json({
    message:"data saved"
})

*/
});

app.listen(PORT,()=>{
    console.log(`server is runing on PORT NO:${PORT}`)
})