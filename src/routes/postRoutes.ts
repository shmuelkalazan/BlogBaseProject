import { Router } from "express";
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  addComment,
} from "../controllers/postController";

const postRouter = Router();
//create new post
//vv
postRouter.post("/", createPost);
//get all post
postRouter.get("/", getPosts);
//get post by id
postRouter.get("/:id", getPost);
//update post by id
postRouter.put("/:id", updatePost);
//delet post by id
postRouter.delete("/:id", deletePost);
//add comments by post id
postRouter.post("/:id/comments", addComment);

export default postRouter;
