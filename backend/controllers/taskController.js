/*const Task = require('../models/taskModel')
const mongoose = require('mongoose')

//GET all tasks
const getTasks = async (req, res) => {
    const user_id = req.user._id

    const tasks = await Task.find({user_id}).sort({createdAt: -1})
    res.status(200).json(tasks)
}

//GET signle task
const getTask = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such task'})
    }

    const task = await Task.findById(id)

    if(!task){
        return res.status(404).json({error: 'No such task'})
    }
    res.status(200).json(task)
}

//POST a task
const createTask = async (req, res) => {
    const {title, description} = req.body

    if(!title){
        return res.status(404).json({error: 'Please fill in all the title'})
    }

    try{
        const user_id = req.user._id
        const task = await Task.create({title, description, user_id})
        
        res.status(200).json(task)
    }
    catch (error){
        res.status(404).json({error: error.message})
    }
}

//DELETE a task
const deleteTask = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such task'})
    }

    const task = await Task.findByIdAndDelete({_id: id})
    if(!task){
        return res.status(400).json({error: 'No such task'})
    }

    res.status(200).json(task)
}

//Update a task
const updateTask = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such task'})
    }

    const task = await Task.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!task){
        return res.status(400).json({error: 'No such task'})
    }

    res.status(200).json(task)
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}*/