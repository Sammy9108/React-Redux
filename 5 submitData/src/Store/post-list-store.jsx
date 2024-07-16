import { createContext, useReducer, useState, useEffect } from "react";

export const PostLists = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (curPostList, action) => {
  let newPostList = curPostList;
  if (action.type === "DELETE_POST") {
    newPostList = curPostList.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...curPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { id },
    });
  };

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
    <PostLists.Provider value={{ postList, fetching, addPost, deletePost }}>
      {children}
    </PostLists.Provider>
  );
};

export default PostListProvider;
