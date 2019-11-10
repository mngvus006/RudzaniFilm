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

const useStyles = makeStyles(styles);

export default function AboutPage() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>About Us</h2>
          <h4>
            Rudzani Muthambi Properties PTY LTD – (RMP), is a 100% black owned
            brainchild of a young female visionary, committed to raising the
            flags of Kwazulu – Natal, Limpopo and Mpumalanga provinces and the
            country through closing the skills and access to information gap.
            This is done by accurately preserving, representing and distributing
            Film and Television content in these areas, through an audience
            development project called iBioscope yeCommunity (Cinema for
            People’s Development), where we take films and filmmakers to
            communities thus making films accessible to the majority of South
            Africans. Our content includes shorts, features, and doccies all
            filmed in SA communities. Rudzani (CEO), an enthusiastic creative
            herself, has been involved in various aspects of the arts, culture
            and entertainment industry for the past 17 years. Having benefited
            from a range of work in radio, film, television, theatre and print
            media and contributed to the establishment and development of
            various cultural initiatives, she got to learn and appreciate the
            power of the arts to create change. From this was spawned the idea
            to form a Distribution Production Company that caters for Africans
            in the Film and Television industry. At the core of the company’s
            ethos is the recognition and respect of the cultural identity of
            indigenous people as an asset for economic development, and this
            forms the basis for the need to promote their stories.
          </h4>

          <h2 className={classes.title}>Vision</h2>
          <h4>
            To be the pioneers of distributing, exhibiting and preserving
            African stories for Africans and the world through Film and
            Television.
          </h4>

          <h2 className={classes.title}>Mission</h2>
          <h4>
            To unearth the audience overlooked by mainstream media by
            distributing, exhibiting, and presenting stories as told by local
            communities in Africa, using their own languages to preserve local
            idioms, and screening in South African communities through iBioscope
            project.
          </h4>

          <h2 className={classes.title}>Values</h2>
          <h4>
            Rudzani Muthambi Properties is committed to making content that is
            ACCESSIBLE and beneficial to African communities, while maintaining
            CONSISTENCY in bringing affordable products and services required by
            our customers. We are creating symbolic RELATIONSHIPS based on
            HONESTY, by cultivating, nurturing and distributing films about our
            audience so in order to build a LOYAL following.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
