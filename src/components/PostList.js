import React, { Component } from "react";

import Post from "./Post";

import "../assets/scss/postlist.scss";

import { loadPosts } from "../services/api.js";

class PostList extends Component {
  state = {
    posts: []
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const posts = loadPosts();
    if (posts) {
      this.setState({ posts: posts });
    }
  }

  // // Executado sempre que houver alterações nas props ou estado
  // componentDidUpdate(_, prevState) {
  //   if (prevState.posts !== this.state.posts) {
  //     localStorage.setItem("posts", JSON.stringify(this.state.posts));
  //   }
  // }

  render() {
    return (
      <section>
        <ul className="postlist">
          {this.state.posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ul>
      </section>
    );
  }
}

export default PostList;
