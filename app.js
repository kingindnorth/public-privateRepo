const express = require("express")
const {engine} = require("express-handlebars")
const connect = require("./utils/db")

require("dotenv").config()

const app = express()

//set view engine
app.engine("handlebars",engine())
app.set("view engine","handlebars")

//serving static files
app.use(express.static("public"))

//body-parser-json
app.use(express.json())
//body-parser-form
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    connect()
    console.log(`server started on port ${PORT}`)
})