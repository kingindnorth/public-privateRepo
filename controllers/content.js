const Content = require("../models/Content")

const getContent = (req,res)=>{
    res.render("content")
}

const addContent = (req,res)=>{
    res.render("content/add",{
        isAuthenticated:req.isAuthenticated()
    })
}

const postContent = async(req,res)=>{
    try{
        req.body.user = req.user.id
        const content = await Content.create(req.body)
        res.redirect("/dashboard")
        
    }catch(err){
        res.status(500).render("error/500")
    }
}

module.exports = {
    getContent,
    addContent,
    postContent
}