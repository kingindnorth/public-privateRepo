const router = require("express").Router()

const Content = require("../models/Content")
const {verifyAuth, verifyLogin} = require("../middlewares/auth")

router.get("/",verifyLogin,(req,res)=>{
    res.render("index",{
        isAuthenticated:req.isAuthenticated()
    })
})

router.get("/dashboard",verifyAuth,async(req,res)=>{
    const content = await Content.find({user:req.user.id}).lean()
    res.render("dashboard",{
        name:req.user.firstname,
        isAuthenticated:req.isAuthenticated(),
        content
    })
})
module.exports = router