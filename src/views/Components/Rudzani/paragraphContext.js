import React, { Component } from "react";
import { blogPostData } from "./blogPostData";


  export const getBlogPostById = id => {
    return blogPostData.find(item => item.id === id);
  }
