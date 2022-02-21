import express from "express";
const router = express.Router();
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

router.get("/", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
