import React from "react";
import styled from "@emotion/styled";

export default function FirstSection() {
  return (
    <CustomSection>
      <ProfileName>
        <p>Hi! I’m Hong Hyeonjeong - </p>
        <p>Front-end Developer</p>
      </ProfileName>
    </CustomSection>
  );
}

const CustomSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  scroll-snap-align: center;

  font-family: sans-serif;
  background: #fed0d1;
  color: #f34a4e;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  &.second {
    background: #f34a4e;
    color: #fed0d1;
  }
`;
const ProfileName = styled.div`
  border: 1px solid red;
  p {
    margin: 0;
  }
`;
