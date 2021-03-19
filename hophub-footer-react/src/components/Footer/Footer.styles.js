import { Link } from "react-router-dom";
import styled from "styled-components";
import { Beer } from "styled-icons/fa-solid";
import { Home } from "styled-icons/fa-solid";
import { InfoCircle } from "styled-icons/fa-solid";

export const FooterWrapper = styled.footer`
  box-sizing: border-box;
  text-align: center;
  padding: 10px 0 0;
  color: #fafafa;
  background: #005778;
  font-size: 16px;
  position: fixed;
  width: 100%;
  height: 50px;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 1000;
`;

export const FooterNav = styled.nav`
  list-style: none;
  font-size: 16px;
  display: flex;
  flex-direction: row;
`;

export const FooterNavLink = styled(Link)`
  flex: 1;
  text-align: center;
  text-decoration: none;
  color: #fafafa;

  &:visited {
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: #fafafa;
  }
`;

export const FooterNavLinkText = styled.li`
  padding: 5px 0 0;
  font-size: 10px;
  font-family: "Ubuntu", sans-serif;
`;

export const BeerIcon = styled(Beer)`
  height: 20px;
  width: 20px;
`;

export const HomeIcon = styled(Home)`
  height: 20px;
  width: 20px;
`;

export const InfoCircleIcon = styled(InfoCircle)`
  height: 20px;
  width: 20px;
`;
