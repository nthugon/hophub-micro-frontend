import styled from "styled-components";

export const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  margin: -75px 0 0 -75px;
  border: 16px solid #e9e9e9;
  border-radius: 50%;
  border-top: 16px solid #78c1ce;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
`;
