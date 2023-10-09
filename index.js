import express from "express";
const app=express();

const PORT=5000;
app.get("/",(req,resp)=>{
    resp.json({
        message:"API IS LIVEE"
    })
})
app.listen(PORT,()=>{
    console.log(`server is runing on PORT NO:${PORT}`)
})