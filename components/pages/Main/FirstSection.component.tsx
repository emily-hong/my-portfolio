import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

export default function FirstSection() {
  return (
    <CustomSection>
      <ProfileName>
        <h1>Hi! I’m Hong Hyeonjeong - </h1>
        <h1>Front-end Developer</h1>
      </ProfileName>

      <ImageLeft>
        <div>
          <Image src="/images/circle.svg" fill alt="circle" />
        </div>
      </ImageLeft>
      <ImageRight>
        <div>
          <Image src="/images/circle.svg" fill alt="circle" />
        </div>
      </ImageRight>
    </CustomSection>
  );
}

const CustomSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  scroll-snap-align: center;

  /* font-family: sans-serif; */
  /* text-transform: uppercase; */

  letter-spacing: 0.1em;
  font-size: 3.125rem;
  font-family: "Nanum Pen Script", cursive;
  color: #121212;
  font-weight: 900;
  background-color: #fff7ed;
`;
const ProfileName = styled.div`
  position: absolute;
  z-index: 1;
  p {
    margin: 0;
  }
`;

const ImageLeft = styled.div`
  position: absolute;
  top: 20.8vw;
  left: 10.41vw;

  div {
    position: relative;
    width: 570px;
    height: 500px;
  }
`;
const ImageRight = styled.div`
  position: absolute;
  top: 200px;
  right: 300px;

  div {
    position: relative;
    width: 420px;
    height: 350px;
  }
`;
