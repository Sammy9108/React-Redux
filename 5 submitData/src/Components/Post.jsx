import { useContext } from "react";
import { PostLists } from "../Store/post-list-store";
import { AiFillDelete } from "react-icons/ai";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostLists);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
