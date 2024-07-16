import { createContext, useReducer } from "react";

export const PostLists = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (curPostList, action) => {
  let newPostList = curPostList;
  if (action.type === "DELETE_POST") {
    newPostList = curPostList.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...curPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST
  );

  const addPost = (useId, title, body) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: { id: Date.now(), userId: useId, title: title, body: body },
    });
  };

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { id },
    });
  };

  return (
    <PostLists.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostLists.Provider>
  );
};

const DEFAULT_POST = [
  {
    id: 1,
    useId: "Test",
    title: "Welcome Post",
    body: "Hi There!! Welcome to our social media app, Feel free to suggest new change Ideas here..",
  },
  {
    id: 2,
    useId: "Fitness",
    title: "Focusing on Fittness",
    body: "i am Daily working out daily and addicted to daily workout and focusing on Body postures.",
  },
];

export default PostListProvider;
