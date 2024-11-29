const Sequelize = require('sequelize');

//import the database connection
const db = require('../database');

const Courses = db.define('course' , {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    course_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    course_description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    credit_hours:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
    })
    module.exports = Courses;
    