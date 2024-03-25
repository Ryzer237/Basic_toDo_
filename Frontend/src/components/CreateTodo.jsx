import { useState } from "react"

export function CreateTodo(){
    const [title,setTilte]=useState("")
    const [description,setDescription]=useState("")
    return (
        <div>
            <input id="title" style={{padding:10,margin:10}} type="text" placeholder="title" onChange={
                function(e){
                    const value=e.target.value;
                    setTilte(value);
                }
            }></input><br/>
            <input id="description"  style={{padding:10,margin:10}} type="text" placeholder="description" onChange={
                function(e){
                    const value=e.target.value;
                    setDescription(value);
                }
            }></input><br/>
            <button id="btn" onClick={()=>{
                fetch("http://localhost:3000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,
                        description:description
                    }),headers:{
                        "content-type":"application/json"
                    }
                }).then(async function(res){
                    const json=await res.json();
                    alert("todo added")
                })
            }} style={{padding:10,margin:10}}>Add a todo</button>
        </div>)
    
}