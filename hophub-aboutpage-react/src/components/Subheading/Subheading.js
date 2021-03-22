import React from "react";
import PropTypes from "prop-types";
import { SubheadingWrapper, SubheadingTitle } from "./Subheading.styles";
import BottleButton from "../BottleButton/BottleButton";

const Subheading = (props) => (
  <SubheadingWrapper>
    <SubheadingTitle>{props.subheadingText}</SubheadingTitle>
    <BottleButton
      linkDestination={props.linkDestination}
      linkText={props.linkText}
    />
  </SubheadingWrapper>
);

Subheading.propTypes = {
  subheadingText: PropTypes.string,
  linkDestination: PropTypes.string,
  linkText: PropTypes.string,
};

export default Subheading;
