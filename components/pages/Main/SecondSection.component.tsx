import styled from "@emotion/styled";
import React from "react";

export default function SecondSection() {
  return (
    <CustomSection>
      <LeftSection>내 사진</LeftSection>
      <RightSection>내 소개</RightSection>
    </CustomSection>
  );
}

const CustomSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  scroll-snap-align: center;
  background-color: #f5f5f5;
  color: #000000;

  /* font-family: sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em; */

  div {
    width: 50%;
    height: 100%;
  }
`;

const LeftSection = styled.div``;
const RightSection = styled.div``;
