import React from "react";
import PropTypes from "prop-types";

import "../assets/scss/comment.scss";

function Comment({ data }) {
  const { id, content, author } = data;
  return (
    <li className="comment" key={id}>
      <div>
        <img src={author.avatar} alt="Author Avatar" />
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    </li>
  );
}

export default Comment;
