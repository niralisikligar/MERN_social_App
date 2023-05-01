import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id",  getUser ,verifyToken);
router.get("/:id/friends", getUserFriends ,verifyToken,);

/* UPDATE */
router.patch("/:id/:friendId", addRemoveFriend ,verifyToken,);

export default router;