
import mongoose from "mongoose";
import { config } from "dotenv";
config({
    path:"./config.env"
})
mongoose.connect(process.env.MM_A);

const user=new mongoose.Schema({
Name:String,
Email:String
});


export const dm=mongoose.model("Data",user);