import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import AboutPage from "./AboutPage.js";

const useStyles = makeStyles(styles);

export default function Bioscope() {
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Parallax image={require("assets/img/bioscope3.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>iBioscope yeCommunity</h1>
                <h3 className={classes.subtitle}>
                  Share African stories to Africans.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2>Cinema for People’s Development</h2>
                <h4>
                  Is a Mobile Cinema or Travelling Cinema project. After 7 years
                  of experimental implementation and praxis in the University of
                  Limpopo, schools and surrounding community audiences, the
                  concept has been redesigned, developed, and improved. It is
                  now theorized as an adapted systemic solution to address the
                  great distribution and audience challenges faced by African
                  filmmakers, and South African Black filmmakers in particular.
                  iBIOSCOPE YECOMMUNITY draws its inspiration from experiences,
                  attempts and initiatives taken in the country related to
                  audience development and distribution of films produced by
                  Black South African filmmakers for their natural and real
                  markets in townships, rural areas and schools. iBIOSCOPE
                  YECOMMUNITY is designed to provide a solution to a problem
                  created by a system of exclusion of black and poor communities
                  in South Africa from accessing African Narrative films
                  produced by black African filmmakers, particularly in South
                  Africa. iBIOSCOPE YECOMMUNITY is also designed as a
                  socio-economical business model with immediate and measurable
                  social and economic impact on local beneficiaries, in line
                  with the National Radical transformation Vision and the Africa
                  Agenda 2063.
                </h4>

                <h4>
                  The black South African filmmakers Are not able to take their
                  films to their natural and real audiences in townships, rural
                  areas and in schools. Many of them have encountered audience
                  failure when releasing their films in the formal distribution
                  circles. “Kalushi” is a perfect illustration of an opportunity
                  lost. This is a great film by a black South African filmmaker,
                  which wasn’t allowed to meet its real audience. Several other
                  independent and private initiatives have been undertaken, of
                  which most have also failed, and few are still trying to find
                  their way without making the required or expected impact
                  because only a systemic solution can successfully be applied
                  to a systemic problem. Our inability to see ourselves on the
                  big screen has led to a great deal of audience isolation. It
                  has decreased the confidence of Black filmmakers in making not
                  only stories that are creative, but also original. As a
                  consequence, hereof, the African story’s importance and valid
                  is brought to disrepute. This cultural event – iBioscope ye
                  Community – Cinema for the people’s development, hopes to
                  change the perception of the elitist cinema going culture by
                  presenting an accessible cinema experience.{" "}
                </h4>

                <h4>
                  We are now taking the successful results from our experience
                  by creating a national network of iBIOSCOPE YECOMMUNITIES in
                  the country. This network will facilitate the long awaited
                  easy access of black South African films in particular and
                  African films generally to their natural audiences in
                  townships, rural areas and schools while providing a platform
                  for filmmakers to easily reach their local audiences in each
                  province and each district of South Africa. The aim is for
                  iBioscope to create a cinema going culture for African and
                  South African films, and ultimately close the gap created by a
                  colonial system, which ignored black audiences the right to
                  watch films made for them, and also denied black filmmakers
                  from accessing their natural audiences in townships, rural
                  areas and schools.
                </h4>

                <br/>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
