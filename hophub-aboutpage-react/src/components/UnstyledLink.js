import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

UnstyledLink.displayName = "StyledLink";

export default (props) => <UnstyledLink {...props} />;
