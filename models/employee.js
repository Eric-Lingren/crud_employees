const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    employeeId: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
    },
    salary: {
        type: Number
    },
    department: {
        type: String
    },
    birthday: {
        type: String
    }
})

module.exports = mongoose.model("Employee", employeeSchema)