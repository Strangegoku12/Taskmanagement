const express=require("express")
const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Welcome to Task Management API")
})

app.listen(4000,()=>{
    console.log("Server is running on port 3000")
})