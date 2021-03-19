import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #78c1ce;
  position: fixed;
  width: 100%;
  height: 40px;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1000;
`;

export const HeaderText = styled.h1`
  padding: 8px 0 0 4%;
  margin: 0;
  font-size: 24px;
  font-family: "Ubuntu", sans-serif;
`;

export const HeaderPointer = styled.span`
  cursor: pointer;
`;
