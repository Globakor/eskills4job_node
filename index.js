//NOde Js

//filesystem
//path
//os

// const fs = require('fs')
//fs.writeFileSync("note.txt","Hello GlobaKor!");
//FileSystem.read('notes.txt')



// const http = require("http")
// const server = http.createServer(( request, response) => {
// response.write("This is our first node server");
// response.end();
// })
// server.listen(8000, () => {
//  console.log("Server is listening port 8000");
// });




// const http = require("http");
// let fullname = "Gloria";

// const server = http.createServer((request, response) => {

//   response.write(`<h1>This is ${fullname} first node server after installing nodemon.</h>`) 
//   response.end();
// })
// server.listen(8000, () => {
//     console.log("Server is listening port 8000");
//    } );
  

// const express = require("express");
// const server = express()

// server.get('/', (request, response) => {
//     response.send ('<h3>This is first node server after installing express.</h3>')
// } )

// server.listen(8000, () => {
//     console.log("Server is listening port 8000");
//    } );
     
// 



// const express = require("express");
// const server = express()

// server.get('/', (request, response) => {
//     response.send ('<h3>This is the home page</h3>')
// } )
// server.get('/About', (request, response) => {
//     response.send ('<h3>This is the about page</h3>')
// } )
// server.get('/login', (request, response) => {
//     response.send ('<h3>This is the login page</h3>')
// } )
// server.get('/signup', (request, response) => {
//     response.send ('<h3>This is the signup page</h3>')
// } )

// server.listen(8000, () => {
//     console.log("Server is listening port 8000");
//    } );


// const express = require("express");
//  const server = express()

// let students = [
//     {id: 1, name:"Abigail Yendork", dob:"2004-10-11", email:"AbigailYendor@gamil.com"},
//     {id: 2, name:"Salma Braimah", dob:"2004-12-31", email:"salmaBraimah@gamil.com"},
//     {id: 3, name:"Samuel Opoku", dob:"1996-02-21", email:"samuelopoku@gamil.com"},
//     {id: 4, name:"Blessed Asare", dob:"2002-07-30", email:"blessedasare@gamil.com"},
//     {id: 5, name:"Juliet Serwaa ", dob:"2003-05-14", email:"julietserwaa@gamil.com"},
    
// ]
// //get all students
// server.get('/api/students',(request, response) => {
//     response.json(students);
// }); 


// //get a student by id
// // server.get('/api/students/:id', (request, response) =>{
// //     const studentId = request.params.id
// //     //console.log(request.params.id);
// //     const student = students.find((student) => {//
// //         student.id === studentId;
// //     });
// //     // console.log(studentId)
// //     if (!student) {
// //     response.json({ message: ` student with id ${studentId}
// //         does not exist`});
    
// //     } else {
// //         response.json(student);
// //     }
// // })


// // Get a student by ID
// server.get('/api/students/:id', (request, response) => {
//     const id = parseInt(request.params.id); 
//     const student = students.find(student => student.id === id);

//     if (student) {
//         response.json(student);
//     } else {
//         response.status(404).json({ message: "Student not found" });
//     }
// });

// server.listen(8000, () => {
//     console.log("Server is listening port 8000");
// });

     




// 




const express = require('express');

// Import routes
const studentRoutes = require('./routes/Studentsroute');
const courseRoutes = require('./routes/coursesroute'); // Assuming this file exists for course routes

// Import database connection
const sequelize = require('./database');

// Import all models
const Student = require('./models/students');
const Classes = require('./models/classes');
const Course = require('./models/courses');
//const Enrollment = require('./models/enrollment');

const server = express();

// Body parser middleware
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Endpoints to get student and course routes
server.use('/api/v1', studentRoutes);
server.use('/api/v1', courseRoutes); 
// Syncing database to node application
sequelize.sync()
    .then((result) => {
        console.log('Database synced successfully');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);  
    });

// Set up model associations
const models = {
    Student,
    Course,
//     Enrollment
};

Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

// Error handling middleware (optional)
server.use((err, req, res, next) => {
    console.error(err.stack);  // Log the stack trace for debugging
    res.status(500).json({ message: 'An internal server error occurred' });
});

// Server port (use environment variable if available)
const PORT = process.env.PORT || 8000;

server.listen(8000, () => {
    console.log("Server listening on port 8000" );
});

module.exports = models;
