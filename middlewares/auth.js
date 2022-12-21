const verifyAuth = (req,res,next) => {
    if(req.isAuthenticated()){
        return next()
    }
    else{
        res.redirect("/")
    }
}

const verifyLogin = (req,res,next) => {
    if(req.isAuthenticated()){
        res.redirect("/dashboard")
    }
    else{
        next()
    }
}

module.exports = {
    verifyAuth,
    verifyLogin
}