import React from "react";
import UnstyledLink from "../UnstyledLink";
import { HeaderWrapper, HeaderText, HeaderPointer } from "./Header.styles";

const Header = () => (
  <HeaderWrapper>
    <HeaderText>
      <UnstyledLink to="/">
        <HeaderPointer>HopHub</HeaderPointer>
      </UnstyledLink>
    </HeaderText>
  </HeaderWrapper>
);

export default Header;
