import React from "react";
import styled from "@emotion/styled";

export default function ForthSection() {
  return <CustomSection>ForthSection</CustomSection>;
}

const CustomSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  scroll-snap-align: center;
  font-weight: bold;

  background-color: #d6d5d1;
  color: #000000;
`;
