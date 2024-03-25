const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://sudhanshuranjan237:ranjan723@cluster0.fui1yi6.mongodb.net/");
//mongodb+srv://sudhanshuranjan237:ranjan723@cluster0.fui1yi6.mongodb.net/
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo:todo
}
