const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require("path")
const app = express()
const PORT = process.env.PORT || 8000

// Middleware
app.use(express.json()) 
app.use(morgan('dev'))  
app.use(express.static(path.join(__dirname, "client", "build")))

//Routes
app.use('/employees', require('./routes/employeeRoutes'))

// Mongoose Connect
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/employees', {useNewUrlParser: true}, () => {
    console.log('[++] Connected to the database, Pal!')
})

// Global server error handler
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

// Default routing
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Server
app.listen(PORT, () => {
    console.log(`[oo] Server is running on Port ${PORT}, Buddy!`)
})