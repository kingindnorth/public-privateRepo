const router = require("express").Router()

router.get("/",(req,res)=>{
    res.send("login with google")
})

module.exports = router