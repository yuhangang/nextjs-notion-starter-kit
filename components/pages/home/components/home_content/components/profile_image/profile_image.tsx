import React from "react";
import styled from "styled-components";

const Duotone = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 50% 50%;

  /* Setup the fixed dimensions */
  position: relative;
  width: 300px;
  max-width: 45vw;
  aspect-ratio: 1;
  /* Image's div styling */
  border-radius: 32px;
  box-shadow: 0 6.3px 3.7px -94px rgba(0, 0, 0, 0.105),
    0 17.5px 10.1px -94px rgba(0, 0, 0, 0.15),
    0 42.2px 24.4px -94px rgba(0, 0, 0, 0.195),
    0 140px 81px -94px rgba(0, 0, 0, 0.3);

  &::before {
    background-color: ${props => props.lightColor};
    content: "";
    display: block;
    border-radius: 32px;
    width: 100%;
    height: 100%;
    mix-blend-mode: darken;
    position: absolute;
  }

  &::after {
    background-color: ${props => props.darkColor};
    content: "";
    display: block;
    border-radius: 32px;
    width: 100%;
    height: 100%;
    mix-blend-mode: color-burn;
    position: absolute;
  }
`;

/*
const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 1000px;
  background-color: white;
  padding: 4px;
  position: relative;
  border: 1px dashed ${props => props.color};

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 24px;
    height: 24px;
    border-radius: 16px;
    background-color: ${props => props.color};
  }
`;
*/

export default function ProfileImage() {
  const darkColor = "rgb(246,200,7)";
  const lightColor = "white";

  return (
    <Duotone
    src="/images/profile_transparent_bg.png"
    lightColor={lightColor}
    darkColor={darkColor}
  />
  );
}
