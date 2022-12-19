const express = require("express")
const connect = require("./utils/db")

require("dotenv").config()

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    connect()
    console.log(`server started on port ${PORT}`)
})