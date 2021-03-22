import styled from "styled-components";
import beerPintImage from "../../img/beer-pint.png";

export const AboutPageWrapper = styled.div`
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  top: 115px;
  bottom: 50px;
  overflow: auto;
  color: #fafafa;
  background-color: #d3d3d3;
  background-size: 100%;
`;

export const Hero = styled.div`
  background: url(${beerPintImage}) no-repeat center -15px;
  background-size: cover;
  min-height: 600px;

  @media (min-width: 350px) {
    min-height: 700px;
  }

  @media (min-width: 768px) {
    width: 75%;
    margin: 0 auto;
    min-height: 1200px;
  }
`;

export const HeroTextWrapper = styled.div`
  vertical-align: top;
  color: #090909;
  width: 50%;
  margin: 0 auto;
  padding: 23% 0 5% 0;
`;

export const HeroText = styled.p`
  font-size: 14px;
  font-family: "Ubuntu", sans-serif;
  text-align: center;

  @media (min-width: 350px) {
    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
