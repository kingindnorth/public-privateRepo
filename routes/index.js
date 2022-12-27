const router = require("express").Router()

const {verifyAuth, verifyLogin} = require("../middlewares/auth")
const{getIndex, getDashboard} = require("../controllers/index")

router.get("/",getIndex)

router.get("/dashboard",verifyAuth,getDashboard)

module.exports = router