const Sequelize = require('sequelize');

//import the database connection
const db = require('../database');

const Enrollment = db.define('enrollment'  , {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'students', 
        key: 'id',           
        },
    },
    course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'courses', 
        key: 'id',        
        },
    },
        enrollment_date:{
        type: Sequelize.DATE,
        allowNull: false,
    
    },
    
    })
    module.exports = Enrollment;

    // defining the relationship in the enrollment model
    Enrollment.associate = (model) => {
    //one to many relationship with student
    Enrollment.belongsTo(model.Student, {
        foreignkey: 'student_id',
        as:'students',
    });

    //one to many relationship with course
    Enrollment.belongsTo(model.Courses, {
        foreignkey: 'course_id',
        as: 'courses',
    })
    };