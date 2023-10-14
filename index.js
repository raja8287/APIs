import express, { json } from "express";
import mongoose from "mongoose";
import { dm } from "./db_comfig.js";
import Jwt from "jsonwebtoken";
import {config} from 'dotenv';


const app=express();

app.use(express.json())
//app.use(express.urlencoded({extended:true}));
config({
    path:"./config.env",
});

console.log(`9999:${process.env.MM_A}`)


app.get("/",async(req,resp)=>{
    console.log(req.body)
    const da=await dm.find()
    resp.json({
        da
    })

});

app.post('/tt/udata',async(req,resp)=>{
  const email=Jwt.sign({_id:req.body.Email},"raja");


if(email== await dm.findOne({Email:req.body.Email})){
    console.log(`same: ${await dm.findOne({Email:req.body.Email})}`)
}
else{console.log(`not same: ${await dm.findOne({Email:req.body.Email})}`)
}

    const present=await dm.findOne({Email:req.body.Email});
        console.log(present);
    if(!present){
    const dd=await dm.create({
Name:req.body.Name,

Email:req.body.Email}
    )
console.log(dd);
if(!dd){
    return resp.json({
        message:"data is not saved"
    })
}

else{
return resp.json({
    message:"data saved"
})}


}



else{
resp.json({
    message:"User all ready exist",
})
}
}


);





app.listen(process.env.PORT,()=>{
    console.log(`server is runing on PORT NO:${process.env.PORT}`)
})