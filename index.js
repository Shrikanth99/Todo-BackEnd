require('dotenv').config()
const express = require('express')
const cors = require('cors')
const configureDb = require('./config/db')
const routes = require('./routes/routes')

const app = express()
const port = process.env.PORT

configureDb()
app.use(express.json())
app.use(cors())
app.use("/", routes);



app.listen(port,() => {
    console.log('server listening to the port',port)
})