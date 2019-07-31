import React from "react";
import Comment from "./Comments";

import "../assets/scss/post.scss";

function Post({ data }) {
  const { id, author, date, content, comments } = data;
  return (
    <li className="post" key={id}>
      <div className="header-post">
        <img src={author.avatar} alt="Author Avatar" />
        <div className="info-user">
          <strong className="authorname">{author.name}</strong>
          <strong className="userdate">{date}</strong>
        </div>
      </div>
      <div className="usercontent">
        <p>{content}</p>
      </div>
      <ul>
        {comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </li>
  );
}

export default Post;
