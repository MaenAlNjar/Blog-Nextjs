import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("FAIL TO GET POSTS");
  }
};
export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    console.log("post",post);
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("FAIL TO GET POST");
  }
};
export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    console.log('user',user);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("FAIL TO GET POSTS");
  }
};
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("FAIL TO GET POSTS");
  }
};
