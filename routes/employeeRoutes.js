const express = require('express')
const employeeRouter = express.Router()
const Employee = require("../models/employee")

employeeRouter.get('/', (req, res, next) => {
    Employee.find((err, employees) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(employees)
    })
})

employeeRouter.get('/:id', (req, res, next) => {
    Employee.findOne({_id: req.params.id} , (err, employee) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(employee)
    })
})

employeeRouter.post('/', (req, res, next) => {
    const newEmployee = new Employee(req.body)
    newEmployee.save((err, employee) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(employee)
    })
})

employeeRouter.put('/:id', (req, res, next) => {
    Employee.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        (err, updatedEmployee) => {
            if (err) {
                return next(err)
            }
            return res.status(201).send(updatedEmployee)
        }
    )
})

employeeRouter.delete('/:id', (req, res, next) => {
    Employee.findOneAndDelete({_id: req.params.id}, (err, deletedEmployee) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`succesfully deleted employee`)
    })
})

module.exports = employeeRouter