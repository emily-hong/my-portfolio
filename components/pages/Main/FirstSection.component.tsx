import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

export default function FirstSection() {
  return (
    <CustomSection>
      <ProfileName>
        <div>
          <p>Hi! I’m Hong Hyeonjeong - </p>
          <p>Front-end Developer</p>
        </div>
      </ProfileName>

      {/* <ImageLeft>
        <div>
          <Image src="/images/circle.svg" fill alt="circle" />
        </div>
      </ImageLeft>
      <ImageRight>
        <div>
          <Image src="/images/circle.svg" fill alt="circle" />
        </div>
      </ImageRight> */}
    </CustomSection>
  );
}

const CustomSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 5vw;
  font-weight: bold;
  font-family: "Apris Light";

  background-color: #181818;

  scroll-snap-align: center;
`;
const ProfileName = styled.div`
  position: absolute;
  z-index: 1;

  p {
    margin: 0;
    text-align: center;
    line-height: 1.3;
    color: #ffffff;
  }
`;

const ImageLeft = styled.div`
  position: absolute;
  top: 25vw;
  left: 10vw;
  /* animation: rotate_image 6s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  } */

  div {
    position: relative;
    width: 570px;
    height: 500px;
  }
`;
const ImageRight = styled.div`
  position: absolute;
  top: 200px;
  right: 17vw;

  div {
    position: relative;
    width: 420px;
    height: 350px;
  }
`;
