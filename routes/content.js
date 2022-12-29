const router = require("express").Router()

const {verifyAuth, verifyLogin} = require("../middlewares/auth")
const {getAllContent, addContent, postContent, editContent} = require("../controllers/content")

router.get("/",verifyAuth,getAllContent)

router.post("/",verifyAuth,postContent)

router.get("/add",verifyAuth,addContent)

router.get("/:id",verifyAuth,editContent)

module.exports = router