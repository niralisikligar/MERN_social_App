import express from "express"
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

/* READ */
router.get("/", getFeedPosts, verifyToken)
router.get("/:userId/posts", getUserPosts, verifyToken)

/* UPDATE */
router.patch("/:id/like", likePost, verifyToken)

export default router
