import { createContext, useReducer } from "react";

export const PostLists = createContext({
  postList: [],
  addPost: () => {},
  addInitialPost: () => {},
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

  const addPost = (useId, title, body) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: { id: Date.now(), userId: useId, title: title, body: body },
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

  return (
    <PostLists.Provider
      value={{ postList, addPost, addInitialPost, deletePost }}
    >
      {children}
    </PostLists.Provider>
  );
};

export default PostListProvider;
