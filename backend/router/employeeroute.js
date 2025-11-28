const express = require("express");
const router = express.Router();
const Employment = require("../model/employeesModel");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");

// STORAGE ENGINE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder where images will be saved
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage });

router.post("/addemployee", upload.single("profileimage"), async (req, res) => {
  try {
    const {
      employeeid,
      fullname,
      date_of_birth,
      gender,
      designation,
      department,
      email,
      date_of_joining,
      reportingmanager,
      phone_number,
      salary,
      password,
      role,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployee = new Employment({
      profileimage: req.file.filename,  // save filename/path
      employeeid,
      fullname,
      date_of_birth,
      gender,
      designation,
      department,
      email,
      date_of_joining,
      reportingmanager,
      phone_number,
      salary,
      password: hashedPassword,
      role
    });

    await newEmployee.save();
    res.status(201).json({ message: "Employee added successfully" });
  } catch (err) {
    console.log("employee error", err);
    res.status(500).json({ message: "Error adding employee", error: err });
  }
});

// getemployee
router.get('/getemployees', async (req, res) => {
    try {
        const employee = await Employment.find();
        res.status(200).json({ employees: employee }); 
    } catch (err) {
        console.log('Error:', err);
        res.status(500).json({ message: 'Server error' });
    }
});


router.delete("/deleteemployee/:id", async (req, res) => {
  try {
    await Employment.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
