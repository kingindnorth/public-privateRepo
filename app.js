const express = require("express")
const passport = require("passport")
const session = require("express-session")
const {engine} = require("express-handlebars")
const morgan = require("morgan")

const connect = require("./utils/db")
const {formatDate} = require("./helpers/hbs")

require("dotenv").config()
require("./utils/strategy")(passport)

const app = express()

//set view engine
app.engine("handlebars", engine())
app.set("view engine","handlebars")

//serving static files
app.use(express.static("public"))

//body-parser-json
app.use(express.json())
//body-parser-form
app.use(express.urlencoded({extended:true}))

//session middleware
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  )

//passport middlewares
app.use(passport.initialize())
app.use(passport.session())

//routes
app.use("/",require("./routes/index"))
app.use("/auth",require("./routes/auth"))
app.use("/content",require("./routes/content"))

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    connect()
    console.log(`
    server started on port ${PORT}
    site:http://localhost:${PORT}
    `)
})