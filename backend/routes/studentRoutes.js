import express from 'express';
import multer from 'multer';
import fs from 'fs';
import studentModels from '../models/studentModels.js';


const router = express.Router();


// Uploading student Picture;
const upload = multer({ dest: 'uploads/'});
const uploadStudentImages = upload.fields([
  {name: 'image', maxCount: 1}
]);


// Create students
router.post('/create', uploadStudentImages, async (req, res) => {

  console.log(req.files.image[0]);
  let img = req.files.image[0];
  let fileType = (img.mimetype).split('/')[1];
  let newFileName = img.filename + '.' + fileType;
  fs.rename(`./uploads/${img.filename}`, `./uploads/${newFileName}`, () => {
    console.log("The file is successfully renamed, congratulations");
  })
  // res.send("It is automatically working as requried!!!"); 

  const newStudent = new studentModels({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    course: req.body.course,
    image: newFileName,
    admissionNumber: req.body.admissionNumber,
    age: req.body.age,
    height: req.body.height, 
    yearOfBirth: req.body. yearOfBirth
  })
  let result = await newStudent.save()
  res.send(result)
});

// Get one Student
router.get('/:id', async (req, res) => {
  let id = req.params.id;
  let result = await studentModels.findOne({_id: id});
  res.send(result);
});

// Get Students
router.get('/', async (req, res) => {
  let students = await studentModels.find();
  res.send(students);
});

// Update student;
router.post('/update/:id', async (req, res) => {
  let student = await studentModels.findOne({_id: req.params.id});
  student.firstName = req.body.firstName;
  student.lastName = req.body.lastName;
  student.course = req.body.course;
  student.admissionNumber = req.body.admissionNumber;
  student.age = req.body.age;
  student.height = req.body.height;
  student.yearOfBirth = req.body.yearOfBirth;

  const result = await student.save();
  res.send(result);
});

//Delete student;
router.post('/delete/:id', async (req, res) => {
  let id = req.params.id;
  await studentModels.deleteOne({_id: id});
  res.send("One of the students has been deleted successfully");
});


export default router;