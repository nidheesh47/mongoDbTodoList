const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true,'title is required'],
        trim : true
    },
    description : {
        type : String,
        required : [true, 'description is required'],
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    date : {
        type : Date,
        default : Date.now
    }
}) 
const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo