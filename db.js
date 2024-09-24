const mongoose = require('mongoose')
require('dotenv').config
const url = process.env.MONGODB_URL

const connectToDb = async()=>{
    mongoose.connect(url)
}
connectToDb().catch(error => console.log(error))

module.exports = connectToDb