const router = require("express").Router()

const {verifyAuth, verifyLogin} = require("../middlewares/auth")
const {
    getAllContent,
    addContent, 
    postContent, 
    editContent, 
    getContentById,
    deleteContentById
} = require("../controllers/content")

router.get("/",verifyAuth,getAllContent)

router.post("/",verifyAuth,postContent)

router.get("/add",verifyAuth,addContent)

router.get("/:id",verifyAuth,editContent)

router.put("/:id",verifyAuth,getContentById)

router.delete("/:id",verifyAuth,deleteContentById)

module.exports = router