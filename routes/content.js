const router = require("express").Router()

const {verifyAuth, verifyLogin} = require("../middlewares/auth")
const {getContent, addContent, postContent} = require("../controllers/content")

router.get("/",getContent)

router.get("/add",verifyAuth,addContent)

router.post("/",verifyAuth,postContent)

module.exports = router