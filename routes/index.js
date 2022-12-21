const router = require("express").Router()

const {verifyAuth, verifyLogin} = require("../middlewares/auth")

router.get("/",verifyLogin,(req,res)=>{
    res.render("index",{
        isAuthenticated:req.isAuthenticated()
    })
})

router.get("/dashboard",verifyAuth,(req,res)=>{
    res.render("dashboard",{
        name:req.user.firstname,
        isAuthenticated:req.isAuthenticated()

    })
})
module.exports = router