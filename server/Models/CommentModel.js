
import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    userProfile:String,
    username:String,
    userId: { type: String, required: true },
    postId: { type: String, required: true },
    text: String,
    likes: [],
  },
  {
    timestamps: true,
  }
);

var CommentModel = mongoose.model("Comment", commentSchema);
export default CommentModel;