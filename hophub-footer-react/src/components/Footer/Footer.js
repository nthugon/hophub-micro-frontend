import React from "react";
import {
  FooterWrapper,
  FooterNav,
  FooterNavLink,
  FooterNavLinkText,
  BeerIcon,
  HomeIcon,
  InfoCircleIcon,
} from "./Footer.styles";

const Footer = () => (
  <FooterWrapper>
    <FooterNav>
      <FooterNavLink to="/">
        <HomeIcon />
        <FooterNavLinkText>HOME</FooterNavLinkText>
      </FooterNavLink>
      <FooterNavLink to="/beers">
        <BeerIcon />
        <FooterNavLinkText>BEERS</FooterNavLinkText>
      </FooterNavLink>
      <FooterNavLink to="/about">
        <InfoCircleIcon />
        <FooterNavLinkText>ABOUT</FooterNavLinkText>
      </FooterNavLink>
    </FooterNav>
  </FooterWrapper>
);

export default Footer;
