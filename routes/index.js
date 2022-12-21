const router = require("express").Router()

const {verifyAuth, verifyLogin} = require("../middlewares/auth")

router.get("/",verifyLogin,(req,res)=>{
    res.render("index",{
        layout:"index"
    })
})

router.get("/dashboard",verifyAuth,(req,res)=>{
    res.render("dashboard",{
        name:req.user.firstname,
    })
})
module.exports = router