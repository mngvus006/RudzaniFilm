import React, { Component } from "react";
import { getBlogPostById } from "./paragraphContext.js";
import { blogPostData } from "./blogPostData";

import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
const useStyles = makeStyles(styles);

export default function BlogList() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>
        Be inspired by remarkable African storytellers journey
      </h2>
      <div>
        <GridContainer>
          {blogPostData.map(blog => {
            return (
              <GridItem key={blog.id} xs={12} sm={12} md={4}>
                <Link
                  to={{
                    pathname: "blog-post",
                    blogId: blog.id
                  }}
                >
                  <Card plain>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={6}
                      className={classes.itemGrid}
                    >
                      <img
                        src={blog.profileImage}
                        alt="..."
                        className={imageClasses}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      {blog.name}
                      <br />
                      <small className={classes.smallTitle}>
                        {blog.bannerSubTitle}
                      </small>
                    </h4>
                    { /*  <CardBody>
                      <p className={classes.description}>
                        {blog.bannerSubTitle}
                      </p>
                    </CardBody>
                   <CardFooter className={classes.justifyCenter}>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fab fa-instagram"} />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <i className={classes.socials + " fab fa-facebook"} />
                      </Button>
                    </CardFooter>
                    */
          }
                  </Card>
                </Link>
              </GridItem>
            );
          })}
        </GridContainer>
      </div>
    </div>
  );
}
