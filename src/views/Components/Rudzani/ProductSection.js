import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VideoCam from "@material-ui/icons/Videocam";
import VideoGame from "@material-ui/icons/VideogameAssetSharp";
import whatApp from "@material-ui/icons/Chat";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Research and Development  </h2>
          <h5 className={classes.description}>
           BEFORE WE WERE STREET NAMES, a
            political satire feature that looks at lives of the freedom fighters
            in Africa.
          </h5>
          <h5 className={classes.description}>
            URBAN BLACK RADIO, a 75 – minute feature documentary, tracing the
            past 35 years of urban black radio in South Africa and its
            contributions to the current radio trends as told by the radio
            legend.
          </h5>

          <h5 className={classes.description}>
            55 AFRICAN STAMPS. A travelogue depicting Africa’s beauty and
            history through the eyes of their stars.
          </h5>

          <h5 className={classes.description}>
            READING LIST, a feature film about a girl who turns an isolation
            room into something beautiful.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Conceptualizing, Script writing, and Producing"
              //description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Film and Television Training, Social documentaries, Feature films and Short films"
              //description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VideoCam}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Game Design"
             //description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VideoGame}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>

      <div>

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Work with us</h2>
            <h5 className={classes.description}>
              <a className="right-area" href="mailto:ru@rudzani.tv">ru@rudzani.tv</a>
            </h5>
            <h5 className={classes.title}>
             +27 61 448 3540
            </h5>

          </GridItem>
        </GridContainer>

      </div>
    </div>
  );
}
