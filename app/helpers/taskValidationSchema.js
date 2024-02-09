const Task = require('../models/task-Model.js')

const categoryValidationSchema = {
    name : {
        notEmpty : {
            errorMessage : 'Task name should not be empty'
        },
        custom : {
            options : async(value) => {
                const task = await Task.findOne({name : {'$regex' : value , $options : 'i' } })
                if(!task){
                    return true
                }else {
                    throw new Error('Same Task already present')
                }
            }
        }
    },
    description : {
        notEmpty : {
            errorMessage : 'Description Should not be Empty'
        }
    }
}
module.exports = categoryValidationSchema