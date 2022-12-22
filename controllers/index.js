const Content = require("../models/Content")

const getIndex = (req,res)=>{
    res.render("index",{
        isAuthenticated:req.isAuthenticated()
    })
}

const getDashboard = async(req,res)=>{
    const content = await Content.find({user:req.user.id}).lean()
    res.render("dashboard",{
        name:req.user.firstname,
        isAuthenticated:req.isAuthenticated(),
        content
    })
}

module.exports = {
    getIndex,
    getDashboard
}