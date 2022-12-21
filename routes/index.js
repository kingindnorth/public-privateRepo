const router = require("express").Router()

const {verifyAuth, verifyLogin} = require("../middlewares/auth")

router.get("/",verifyLogin,(req,res)=>{
    res.render("index")
})

router.get("/dashboard",verifyAuth,(req,res)=>{
    res.render("dashboard")
})
module.exports = router