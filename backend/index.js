const cors=require("cors");
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

const app = express();
app.use(cors())
const PORT=3000
app.use(express.json());

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})



app.get("/todos",async (req,res)=>{
const todos=await todo.find({});
res.json({
    todos
})
})


app.put("/completed", async (req,res)=>{
const updatePayLoad=req.body
const parsePayLoad=updateTodo.safeParse(updatePayLoad);
if(!parsePayLoad.success){
    res.status(411).json({
        msg:"update failed,wrong inputs"
    })
    return;
}
await todo.update({
    _id:req.body.id},{
        completed:true
    }
)
res.json({
    msg:"Todo marked as completed"
})
})




app.listen(PORT,()=>{
    console.log(`lisitng on port ${PORT}`);
})