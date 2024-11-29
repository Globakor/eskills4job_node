// const express = require('express')
// const router = express.Router()

// //import controllers
// const StudentController = require('../controllers/studentController')

// let students = [
//     {id: 1, name:"Abigail Yendork", dob:"2004-10-11", email:"AbigailYendor@gamil.com"},
//     {id: 2, name:"Salma Braimah", dob:"2004-12-31", email:"salmaBraimah@gamil.com"},
//     {id: 3, name:"Samuel Opoku", dob:"1996-02-21", email:"samuelopoku@gamil.com"},
//     {id: 4, name:"Blessed Asare", dob:"2002-07-30", email:"blessedasare@gamil.com"},
//     {id: 5, name:"Juliet Serwaa ", dob:"2003-05-14", email:"julietserwaa@gamil.com"},
    
// ]

//get all students in the database
// router.get('/get-students/', (request, response) => {
//     response.json(students);
// })


// // get a student by id
// router.get('/students/:id', (request, response) => {
//     const id = parseInt(request.paramas.id);

//     const student = students.find((student) => {
//         return student.id === studentId;
//     }); 

//     console.log(student)
//     if (!student) {
//         return response.json({ message: `student with id ${id} not
//         found` })
//     } else {
//         response.json(student);
//     }
// });

//create a new student
// router.post('/create-student/', StudentController.createStudent)
//(request, response) => {
//     const student = request.body;
//     students.push(student);

//     response.json(student);
// }

// module.exports = router;



// const express = require('express')
// const router = express.Router()

// //import controllers
// const StudentController = require('../controllers/studentController') 

// //create a new student
// router.post('/create-student/', StudentController.createStudent)

// // Get all students 
// router.get('/students/', StudentController.getAllStudents)

// // Get a student by ID
// router.get('/students/:id', StudentController.getStudentById)


// module.exports = router;



const express = require('express')

const router = express.Router();

// import controllers
const StudentController = require('../controllers/studentController')


// create a new student
router.post('/create-student/', StudentController.createStudent);
router.get('/students', StudentController.getAllStudents);
router.get('/student/:id', StudentController.getStudentById)
router.put('/update-student/:id', StudentController.updateStudent)

module.exports = router;