const express = require("express")
const passport = require("passport")
const session = require("express-session")
const methodOverride = require("method-override")
const {engine} = require("express-handlebars")
const morgan = require("morgan")

const connect = require("./utils/db")
const {formatDate,truncate,stripTags,editIcon} = require("./helpers/hbs")

require("dotenv").config()
require("./utils/strategy")(passport)

const app = express()

//register helper
app.engine("handlebars", engine({helpers:{
  formatDate,
  truncate,
  stripTags,
  editIcon
}}))
//set view engine
app.set("view engine","handlebars")

//serving static files
app.use(express.static("public"))

//body-parser-json
app.use(express.json())
//body-parser-form
app.use(express.urlencoded({extended:true}))

// Method override
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
    }
  })
)

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

//global variables
app.use((req,res,next)=>{
  res.locals.user = req.user || null
  next()
})

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