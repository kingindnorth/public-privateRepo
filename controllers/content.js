const Content = require("../models/Content")

const getAllContent = async(req,res)=>{
    const content = await Content.find({status:"public"}).populate("user").sort({createdAt:"desc"}).lean()
    console.log(content);
    res.render("content/content",{
     content,   
     isAuthenticated:req.isAuthenticated()   
    })
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
    getAllContent,
    addContent,
    postContent
}