
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/Backend");

const user=new mongoose.Schema({
Num:Number
});


export const dm=mongoose.model("Data",user);