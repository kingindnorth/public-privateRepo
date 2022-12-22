const router = require("express").Router()

const Content = require("../models/Content")

const {verifyAuth, verifyLogin} = require("../middlewares/auth")

router.get("/",(req,res)=>{
    res.render("content")
})

router.get("/add",verifyAuth,(req,res)=>{
    res.render("content/add",{
        isAuthenticated:req.isAuthenticated()
    })
})

router.post("/",verifyAuth,async(req,res)=>{
    try{
        req.body.user = req.user.id
        const content = await Content.create(req.body)
        res.redirect("/dashboard")
        
    }catch(err){
        res.status(500).render("error/500")
    }
})
module.exports = router