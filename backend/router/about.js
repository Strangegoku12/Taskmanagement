const express=require("express")
const router=express.Router()
const Employment = require("../model/employeesModel");
const authMiddlewaredata=require("./auth")


router.get('/about',authMiddlewaredata,async(req,res)=>{
try{
    console.log("show teh about id",req.user.id);
    
const employeedata = await Employment.findOne({ _id: req.user.id });
   res.status(200).json({employeedata:employeedata})

}catch(err){
    res.status(500).json({ message: "Error adding employee", error: err });
}
})
module.exports = router