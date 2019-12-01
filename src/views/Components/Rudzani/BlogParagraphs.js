import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import SectionCarousel from "./SectionCarousel";
import { getBlogPostById } from "./paragraphContext.js";

const useStyles = makeStyles(styles);

export default function BlogParagraphs(props) {
  const classes = useStyles();
  const {paragraphs,
    mainTitle,
    carouselImages
  } = props.blogItem;

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          {<h2 className={classes.title}>{mainTitle}</h2>}
          {paragraphs.map(paragraph => {
            return <h4 className={classes.description}>{paragraph}</h4>;
          })}
        </GridItem>
      </GridContainer>
      <SectionCarousel carouselImages={carouselImages}/>
    </div>
  );
}
