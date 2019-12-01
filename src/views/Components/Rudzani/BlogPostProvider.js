import React, { Component } from "react";
import { blogPostData } from "./blogPostData";

const BlogPostContext = React.createContext();

class BlogPostProvider extends Component {
  state = {
    blogPosts: blogPostData
  };

  getBlogPostById = id => {
    return this.state.blogPosts.find(item => item.id === id);
  };

  render() {
    return (
      <BlogPostContext.Provider
        value={{
          ...this.state,
          getBlogPostById: this.getBlogPostById
        }}
      >
        {this.props.children}
      </BlogPostContext.Provider>
    );
  }
}

const BlogPostConsumer = BlogPostContext.Consumer;

export { BlogPostConsumer, BlogPostProvider };
