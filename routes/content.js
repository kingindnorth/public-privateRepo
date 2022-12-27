const router = require("express").Router()

const {verifyAuth, verifyLogin} = require("../middlewares/auth")
const {getAllContent, addContent, postContent} = require("../controllers/content")

router.get("/",verifyAuth,getAllContent)

router.get("/add",verifyAuth,addContent)

router.post("/",verifyAuth,postContent)

module.exports = router