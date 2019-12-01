import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import BlogParagraphs from "./BlogParagraphs.js";
import { getBlogPostById } from "./paragraphContext.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function BlogPostLandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const blogId = typeof(props.location.blogId) !== 'undefined' ? props.location.blogId : 1
  const blogItem = getBlogPostById(blogId);
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={blogItem.bannerImage}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
      <h1 className={classes.title}>{blogItem.trailerName}</h1>
      <h4>{blogItem.bannerSubTitle}</h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href={blogItem.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <BlogParagraphs blogItem={blogItem} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
