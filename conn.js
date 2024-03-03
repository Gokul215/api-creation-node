import mongoose from "mongoose";


export default async function connect(){
    // console.log(process.env.ATLAS_URI);
    await mongoose.connect("mongodb+srv://admin:1234@cluster0.va59nxs.mongodb.net/?retryWrites=true&w=majority")
    console.log("Database Connected")
}