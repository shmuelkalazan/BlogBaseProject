import mongoose, { Schema, Document,Model, Types } from "mongoose";

export interface IComment {
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
}

export interface IPost extends Document {
  _id: Types.ObjectId;
  title: string;
  content: string;
  author: Types.ObjectId;
  comments: IComment[];
}

const CommentSchema = new Schema<IComment>({
  content:{
    type: String,
    required: [true, "content is required"],
  },
  author:{
    type: Schema.Types.ObjectId,
    ref:"Uesr",
  },
},{timestamps:true});

const PostSchema = new Schema<IPost>({
  title: {
    type: String,
    required: [true, "the title is required"],
    minlength: [3, "title is too short, please enter at least 3 characters"],
    unique:true
  },
  content: {
    type: String,
    required: [true, "content is required"],
    minlength: [3, "content is too short, please enter at least 3 characters"],
    unique:true
  },
  author:{
    type: Schema.Types.ObjectId,
    ref:"Uesr",
  },
  comments:{
    type:[CommentSchema],
    default:[]
  }
});

const PostModel:Model<IPost> = mongoose.model<IPost>('Post', PostSchema);

export {
  PostModel,
};
