const express = require("express");
const router = express.Router();
const loginSchema=require('../model/loginModel')
const signupSchema=require('../model/signupModel')
const bcrypt = require("bcrypt");


router.post('/signup',async(req,res)=>{
    const alreadyuser=await signupSchema.findOne(req.body.email)
    if(alreadyuser){
       return res.status(400).json({message:"Already Email is presented"})
    }

    try{
    const {email,password}=req.body
    const hashedpassword=bcrypt.hash(password,10)
    const newuser=new signupSchema({
        email,
        password:hashedpassword
    })
      await newuser.save()
      return res.status(201).json({message:"Signed up user"})
    }catch(err){
       console.error('Error:', err);
       return  res.status(500).json({ message: 'Server error' });
    }
})

router.post('/login',(req,res)=>{
    try{
        const{email,password}=req.body

    }catch(err){

    }
})

module.exports=router;
