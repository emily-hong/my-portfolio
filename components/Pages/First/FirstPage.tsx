import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/*
  첫번째 페이지
  프로필 사진, 인삿말
 */
export const FirstPage = () => {
  return (
    <Outer>
      첫 번째 페이지
      <ArrowDiv className="arrow-div">
        <img src="/icons/double-down.png" />
      </ArrowDiv>
    </Outer>
  );
};

const Outer = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100vh;
  top: 0;
  position: fixed;
  z-index: -1;

  background-color: #f4f4f4;
  font-size: 2rem;
  color: #333;
`;

const ArrowDiv = styled.div`
  position: absolute; /* 뷰포트 기준으로 고정 */
  width: 3rem;
  left: 50%; /* 수평 중심 */
  bottom: 2rem; /* 아래에서 2rem 간격 */
  transform: translateX(-50%); /* 수평 중심 보정 */

  img {
    width: 100%;
  }
`;
