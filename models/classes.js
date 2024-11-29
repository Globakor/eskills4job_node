const Sequelize = require('sequelize');

//import the database connection
const db = require('../database');

const Classes = db.define('classes'  , {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    instructors_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'instructors', 
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
    semester: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    
    })
    module.exports = Classes;
    
    
// defining the relationship in the classes model
Classes.associate = (model) => {
    //one to many relationship with student
    Classes.belongsTo(model.Instructors, {
        foreignkey: 'instructors_id',
        as:'instructors',
    });

    //one to many relationship with course
    Classes.belongsTo(model.Courses, {
        foreignkey: 'course_id',
        as: 'courses',
    })
    };    