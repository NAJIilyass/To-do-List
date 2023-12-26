require('dotenv').config()

const express = require('express')
const tasksRoutes = require('./routes/tasks')
const userRoutes = require('./routes/users')
const mongoose = require('mongoose');
/*const cors = require('cors');*/

//Express app
const app = express()


//connnect to MongoDB
mongoose.connect(process.env.MONG_URI)
    .then((result) => app.listen(process.env.PORT, () => {
        console.log('Connected to DB & Listening on port '+ process.env.PORT)
    }))
    .catch((err) => console.log(err))

//Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

//app.use(cors())


//Routes
app.use('/api/tasks', tasksRoutes)
app.use('/api/users', userRoutes)