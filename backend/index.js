const express=require("express")
const app=express()
const connectmongo=require('./router/connect')
const loginsignup=require('./router/LoginSignuproute')
app.use(express.json())


connectmongo()

app.use('/',loginsignup)

app.get('/',(req,res)=>{
    res.send("Welcome to Task Management API")
})

app.listen(4000,()=>{
    console.log("Server is running on port 3000")
})