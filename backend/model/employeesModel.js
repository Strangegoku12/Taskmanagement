const mongoose = require('mongoose');

const EmployementSchema = new mongoose.Schema({
    profileimage:{
        type:String,
        required:true
    },
    employeeid:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true,
    },
    date_of_birth:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    date_of_joining:{
        type:String,
        required:true
    },
    reportingmanager:{
        type:String,
        required:true
    },
    phone_number:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    role: {
    type: String,
    enum: ['employee', 'admin'],
    default: 'employee'
  },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model('EmployementSchema',EmployementSchema);