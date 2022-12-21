const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    googleId:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("User",UserSchema)