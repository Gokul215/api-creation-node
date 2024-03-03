import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const apischema = new Schema({
    items: { type : Array, default: []}// create question with [] default value
  
    
});

export default mongoose.model('apischema', apischema);