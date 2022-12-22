const router = require("express").Router()

const {verifyAuth, verifyLogin} = require("../middlewares/auth")
const{getIndex, getDashboard} = require("../controllers/index")

router.get("/",verifyLogin,)

router.get("/dashboard",verifyAuth,)

module.exports = router