import { useContext } from "react";
import Post from "./Post";
import { PostLists } from "../Store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostLists);

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default PostList;
