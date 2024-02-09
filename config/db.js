const mongoose = require('mongoose')

const configureDb = async() => {
    const dbName = process.env.dbName
    const dbUrl = 'mongodb://127.0.0.1:27017'
    try {
        await mongoose.connect(`${dbUrl}/${dbName}`)
        console.log(`connected to the book-store database`)
    } catch (e) {
        console.log('error connecting to the db',e)
    }

}
module.exports = configureDb