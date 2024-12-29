import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/*
  첫번째 페이지
  프로필 사진, 인삿말
 */
export const FirstPage = () => {
  return (
    <Outer>
      <LeftSection>
        <div>
          <SubTitle>Hello</SubTitle>
          <Title>I'm Hyeonjeong</Title>
          <SubTitle className="description">
            Full-Stack Developer with expertise in both Frontend and Backend
            development
          </SubTitle>
        </div>
      </LeftSection>

      <RightSection>
        <ImgContainer>
          {/* <img src="/images/sample-profile.png" alt="profile" /> */}
          {/* <img src="/images/profile-img.png" alt="profile" /> */}
        </ImgContainer>
      </RightSection>

      {/* 아래버튼 */}
      <ArrowDiv className="arrow-div">
        <img src="/icons/double-down.png" />
      </ArrowDiv>
    </Outer>
  );
};

const Outer = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  position: fixed;
  z-index: -1;

  display: flex;
  justify-content: center;

  background-color: #f4f4f4;
  font-size: 2rem;
  color: #333;
`;

const LeftSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;

  & > div {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
const Title = styled.div`
  font-size: 5rem;
  font-weight: bold;
`;
const SubTitle = styled.div`
  font-size: 4rem;

  &.description {
    font-size: 2rem;
  }
`;

// 페이지 오른쪽 영역
const RightSection = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: end;
`;

const ImgContainer = styled.div`
  height: 90%;

  img {
    height: 100%;
    width: 100%;
  }
`;

const UrlSection = styled.div`
  position: absolute;
  top: 1rem;
  left: 3rem;
  width: 10rem;
  height: 5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  z-index: 5;

  .url-icon {
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: bold;
    border: 1px solid red;
  }
  img {
    width: 100%;
    height: 100%;
  }

  border: 1px solid red;
`;

const ArrowDiv = styled.div`
  position: absolute; /* 뷰포트 기준으로 고정 */
  width: 3rem;
  left: 50%; /* 수평 중심 */
  bottom: 3rem;
  transform: translateX(-50%); /* 수평 중심 보정 */
  animation: bounce 1s infinite ease-in-out;
  img {
    width: 100%;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0) scale(1); /* 기본 크기 */
    }
    50% {
      transform: translateY(-20px) scale(1.1); /* 위로 이동하며 커짐 */
    }
  }
`;
