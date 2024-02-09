const mongoose = require('mongoose')
const {model,Schema} = mongoose

const taskSchema = new Schema({
    name : String,
    description : String,
    isCompleted : {
        type : Boolean,
        default : false
    }
})
const Task = model('Task', taskSchema)

module.exports = Task