import styled from "@emotion/styled";
import React from "react";

export default function ThirdSection() {
  return <CustomSection>ThirdSection</CustomSection>;
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
