const Sequelize = require('sequelize');

//import the database connection
const db = require('../database');

const Instructors = db.define('instructors' , {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    instructors_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    department: {
        type: Sequelize.STRING,
        allowNull: false,
    }
    
     })
     module.exports = Instructors;
    
    
    
    
    