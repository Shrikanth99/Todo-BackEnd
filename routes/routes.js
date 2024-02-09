const express = require('express')
const router = express.Router()
const {checkSchema, validationResult} = require('express-validator')
const taskCltr = require('../app/controller/task-cltr')
const taskValidationSchema = require('../app/helpers/taskValidationSchema')

router.get('/list-All',taskCltr.listAll)
router.post('/addTask', checkSchema(taskValidationSchema) ,taskCltr.create )
router.put('/update-Task/:id',taskCltr.update)
router.delete('/delete-Task/:id',taskCltr.destroy)

module.exports = router