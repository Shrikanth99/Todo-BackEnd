const Task = require('../models/task-Model')
const {validationResult} = require('express-validator')
const _ = require('lodash')

const taskCltr = {}

taskCltr.listAll = async(req,res) => {
    try {
        const task = await Task.find()
        res.json(task)
    } catch (e) {
        res.status(500).json(e)
    }
}

taskCltr.create = async(req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array() })
    }
    // const body = _.pick(req.body,['name'])
    try{
        const task = new Task(req.body)
        const result = await task.save()
        res.json(result)
    }catch(e){
        res.status(500).json(e)
    }
}

taskCltr.update = async(req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }
    try {
        const task = await Task.findOneAndUpdate({ _id : req.params.id },{isCompleted:true},{new:true})
        res.json(task)
    } catch (e) {
        res.status(500).json(e)
    }
}

taskCltr.destroy = async(req,res) => {
    console.log('del',req.params.id)
    try {
        const task = await Task.findOneAndDelete({_id:req.params.id})
        res.json(task)
    } catch (e) {
        res.status(500).json(e)
    }
}

module.exports = taskCltr