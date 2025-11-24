const express = require("express");
const router = express.Router();
const taskModel = require("../model/taskModel");


router.post("/addtask", async (req, res) => {
  try {
    const {
      name,
      tasktitle,
      status,
      totaltime,
      createdby
    } = req.body;


    const newtask = new taskModel({
      name,
      tasktitle,
      status,
      totaltime,
      createdby
    });

    await newtask.save();
    res.status(201).json({ message: "Task added successfully" });
  } catch (err) {
    console.log("task error", err);
    res.status(500).json({ message: "Error adding task", error: err });
  }
});

// getemployee
router.get('/gettask', async (req, res) => {
    try {
        const taskdetails = await taskModel.find();
        res.status(200).json({ task: taskdetails }); 
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});


router.delete("/deletetask/:id", async (req, res) => {
  try {
    await taskModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "task deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
