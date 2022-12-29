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

const editContent = async(req,res) => {
    try{
        const param = req.params.id
        const content = await Content.findOne({_id:param}).lean()
        if(!content) return res.render("error/404")
        if(content.user !== req.user._id) return res.render("error/404")
        res.render("content/edit",{
            content
        })
    }catch(err){
        res.status(500).render("error/500")
    }
}

module.exports = {
    getAllContent,
    addContent,
    postContent,
    editContent
}