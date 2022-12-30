const mongoose = require("mongoose")

const connect = async() => {
    await mongoose.connect(process.env.MONGO_URI)
}

mongoose.set('strictQuery', true)

mongoose.connection.on("connected",()=>{
    console.log("database connected")
})

mongoose.connection.on("disconnected",()=>{
    console.log("database disconnected")
})

module.exports = connect