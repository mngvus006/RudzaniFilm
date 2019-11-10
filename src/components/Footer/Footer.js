/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
      <footer className={footerClasses}>
        <div className={classes.container}>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a
                    href="https://targetonline.co.za"
                    className={classes.block}
                    target="_blank"
                >
                  Taregt Online (PTY) LTD
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                    href="https://targetonline.co.za#about-us"
                    className={classes.block}
                    target="_blank"
                >
                  About us
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                    href="https://www.youtube.com/channel/UCPXwn709gmxylXeGiPCRjvA"
                    className={classes.block}
                    target="_blank"
                >
                  YouTube Channel
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                    href="https://web.facebook.com/Web-Development-Services-2078283995516794/"
                    className={classes.block}
                    target="_blank"
                >
                  Facebook Page
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , made with{" "}
            <Favorite className={classes.icon} /> by{" "}
            <a
                href="https://targetonline.co.za"
                className={aClasses}
                target="_blank"
            >
              Taregt Online (PTY) LTD
            </a>{" "}
            for a better web.
          </div>
        </div>
      </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
