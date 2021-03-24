import React from "react";
import UnstyledLink from "../UnstyledLink";
import PropTypes from "prop-types";
import {
  BottleButtonWrapper,
  BottleButtonBody,
  BottleButtonText,
  BottleButtonNeck,
} from "./BottleButton.styles";

const BottleButton = (props) => (
  <BottleButtonWrapper>
    <UnstyledLink to={props.linkDestination}>
      <BottleButtonBody>
        <BottleButtonText>{props.linkText}</BottleButtonText>
      </BottleButtonBody>
      <BottleButtonNeck />
    </UnstyledLink>
  </BottleButtonWrapper>
);

BottleButton.propTypes = {
  linkDestination: PropTypes.string,
  linkText: PropTypes.string,
};

export default BottleButton;
