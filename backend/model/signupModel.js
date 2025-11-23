const mongoose=require('mongoose')

const signupSchema=new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['employee','admin'],
        default:'employee'
    }
})

module.exports=mongoose.model('signupSchema',signupSchema)
