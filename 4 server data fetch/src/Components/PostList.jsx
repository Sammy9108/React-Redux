import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostLists } from "../Store/post-list-store";
import WelcomeMesg from "./WelcomeMsg";
import LoadingPage from "./LoadingPage";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostLists);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((pso) => {
        addInitialPost(pso.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingPage />}
      {!fetching && postList.length === 0 && <WelcomeMesg></WelcomeMesg>}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};

export default PostList;
