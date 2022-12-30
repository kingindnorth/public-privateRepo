const router = require("express").Router()

const {verifyAuth, verifyLogin} = require("../middlewares/auth")
const {
    getAllContent,
    addContent, 
    postContent, 
    editContent, 
    updateContentById,
    deleteContentById,
    getContentById
} = require("../controllers/content")

router.get("/",verifyAuth,getAllContent)

router.post("/",verifyAuth,postContent)

router.get("/add",verifyAuth,addContent)

router.get("/edit/:id",verifyAuth,editContent)

router.put("/:id",verifyAuth,updateContentById)

router.delete("/:id",verifyAuth,deleteContentById)

router.get("/:id",verifyAuth,getContentById)

module.exports = router