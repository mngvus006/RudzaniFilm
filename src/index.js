import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import HomePage from "views/Components/Rudzani/LandingPage.js";
import BlogPostLandingPage from "views/Components/Rudzani/BlogPostLandingPage.js";
import BlogPostListLandingPage from "views/Components/Rudzani/BlogPostListLandingPage.js";
import Bioscope from "views/Components/Rudzani/Bioscope.js";
import ServiceLandingPage from "views/Components/Rudzani/ServiceLandingPage.js";
import { BlogPostProvider } from 'views/Components/Rudzani/BlogPostProvider.js';
import BlogLists from 'views/Components/Rudzani/BlogLists.js';

var hist = createBrowserHistory();

ReactDOM.render(
  <BlogPostProvider>
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={Components} />
      <Route path="/blogs" component={BlogPostListLandingPage} />
      <Route path="/blog-post" component={BlogPostLandingPage} />
      <Route path="/iBioscope" component={Bioscope} />
      <Route path="/ServiceLandingPage" component={ServiceLandingPage} />
      <Route path="/" component={HomePage} />    
    </Switch>
  </Router>
  </BlogPostProvider>,
  document.getElementById("root")
);
