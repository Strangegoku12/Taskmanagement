const express = require("express");
const router = express.Router();
const taskModel = require("../model/taskModel");
const Employment = require("../model/employeesModel");
const authMiddleware = require("./auth");


router.post("/addtask", authMiddleware, async (req, res) => {
  try {
    const { name, tasktitle, status, totaltime, createdby } = req.body;

    const newtask = new taskModel({
      name,
      tasktitle,
      status,
      totaltime,
      createdby,
      userId: req.user.id,   
    });

    await newtask.save();
    res.status(201).json({ message: "Task added successfully" });
  } catch (err) {
    console.log("task error", err);
    res.status(500).json({ message: "Error adding task", error: err });
  }
});


// gettask
router.get('/gettask', authMiddleware, async (req, res) => {
  try {

    if (req.user.role === 'admin') {
      const taskdetails = await taskModel.find();
      return res.status(200).json({ task: taskdetails });
    }

    // Employee → return ONLY tasks created by this employee
    const taskdetails = await taskModel.find({ userId: req.user.id });

    res.status(200).json({ task: taskdetails });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching tasks' });
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
