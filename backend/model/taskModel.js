const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    tasktitle:{
        type:String,
        required:true
    },
   status:{
    type:String,
    enum:['Pending','Completed','InProgress'],
    default:'Pending'
   },
   totaltime:{
        type:String,
        required:true
    },
    createdby:{
        type:String,
        required:true
    },
     createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('taskSchema',taskSchema)
