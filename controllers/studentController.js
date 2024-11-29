// const students = require('../models/students')

// class StudentController {
//     //create new student
//     static async createStudent(request, response) {
//         try {
//             const { first_name, last_name, dob, email } = request.
//             body;

//             //validate all fields
//             if (first_name === '' && last_name === '' && dob === '' &&
//                 email === '') {
//                     response.status(400).json({message: "All fields are required"})
//                 }

//                 const newStudent = await students.create({
//                     first_name,
//                     last_name,
//                     dob,
//                     email
//                 });

//                 response.status(201).json({
//                     message: "Student created successfully",
//                     student: newStudent,
//                 })
//             } catch(error) {
//                 console.log('Error creating student', error);
//                 response.status(500).json({message: 'Interval server error.'})
//         }
//     }


//     //get all students
//     static async getAllStudents(request, response) {
//         try {
//             const allStudents = await students.find();
//             response.status(200).json({ sucess: true, data: allStudents});
//         } catch (error) {
//             response.status(500).json({
//                 sucess: false,
//                 message: 'Error fetching students',
//                 error: error.message,
//             });
//         }
//     }

//     //get a student by ID
//     static async getStudentById(request, response) {
//         try{
//             const student = await student.findById(request.params.id);
//             if (!student) {
//                 return response.status(404).json({ 

//                     message: 'Student not found' });
//             }
//             response.status(200).json (student );
//         } catch (error) {
//             response.status(500).json({
//                 success: false,
//                 message: 'Error fetching student',
//                 error: error.message,
//             });
//         }
//     }
// }


// module.exports = StudentController;



const Students = require('../models/students')

class StudentController {
    // create new student
    static async createStudent(request, response) {
        try {
            const { first_name, last_name, dob, email } = request.body;

            // validate all fields
            if (first_name === '' && last_name === '' && dob === '' && email === '') {
                response.status(400).json({message: "All field are required"})
            }

            const newStudent = await Students.create({
                first_name,
                last_name,
                dob,
                email
            });

            response.status(201).json({
                message: "Student created successfully",
                student: newStudent
            })
        } catch (error) {
            console.log('Error creating student', error);
            response.status(500).json({message: 'Internal server error.'})
        }
    }

    static async getAllStudents(request, response) {
        try {
            const students = await Students.findAll();
            response.status(200).json(students);
        } catch (error) {
            console.log('Error fetching all students', error);
            response.status(500).json({ message: "Internal server error."})
        }
    }

    // get student by id
    static async getStudentById(request, response) {
        const student_id = parseInt(request.params.id);
        
        const student = await Students.findByPk(student_id);
        
        if(!student) {
            response.status(404).json({ message: `Student with id ${student_id} not found.`});
        } else {
            response.json(student);
        }
    }

    // update student
    static async updateStudent(request, response) {
        try {
            const student_id = parseInt(request.params.id);
            const { first_name, last_name, dob, email } = request.body;

            const student = await Students.findByPk(student_id)

            if (!student) {
                response.status(404).json({ message: `Student with id ${id} does not exist`})
            } else{
                // update student details
                student.first_name = first_name,
                student.last_name = last_name,
                student.dob = dob,
                student.email = email

                await student.save();

                response.status(200).json({
                    message: "Student updated successfully",
                    student
                })
            }
        } catch (error) {
            response.json({ message: "Internal server error"})
        }
    }
}

module.exports = StudentController