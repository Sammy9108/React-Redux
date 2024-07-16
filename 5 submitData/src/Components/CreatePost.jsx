import { useContext, useRef } from "react";
import { PostLists } from "../Store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostLists);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const uId = userIdElement.current.value;
    const titl = titleElement.current.value;
    const body = bodyElement.current.value;

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: uId,
        title: titl,
        body: body,
      }),
    })
      .then((res) => res.json())
      .then((Spost) => {
        addPost(Spost);
        navigate("/");
      });
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User ID here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          placeholder="Enter USer ID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={titleElement}
          placeholder="Enter Title here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <input
          type="text"
          className="form-control"
          id="body"
          ref={bodyElement}
          placeholder="Enter body details here"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
