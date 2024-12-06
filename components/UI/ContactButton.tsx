import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

export const ContactButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 드롭다운 메뉴 상태 관리

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // 드롭다운 메뉴 열기/닫기 상태 변경
  };

  return (
    <Outer onClick={toggleMenu}>
      Contact Me
      <MenuList $isMenuOpen={isMenuOpen}>
        <MenuItem delay={0.4}>
          <a href="mailto:emilyhong4659@gmail.com" target="_blank">
            <div className="icon-container">
              <img src="/icons/email-icon.png" alt="email" />
            </div>
            {/* <div className="icon-name">Email</div> */}
          </a>
        </MenuItem>
        <MenuItem delay={0.2}>
          <a href="https://github.com/emily-hong" target="_blank">
            {/* <div className="icon-container"> */}
            <img src="/icons/github-icon.png" alt="github" />
            {/* </div> */}
            {/* <div className="icon-name">Github</div> */}
          </a>
        </MenuItem>
        <MenuItem delay={0}>
          <a href="https://velog.io/@emilyhong4659/posts" target="_blank">
            {/* <div className="icon-container">
                <img src="/icons/blog-icon.png" alt="blog" />
              </div> */}
            <div className="icon-name">Blog</div>
          </a>
        </MenuItem>
      </MenuList>
    </Outer>
  );
};

// 버튼테두리 효과
const ripple = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.5); /* 바깥쪽으로 퍼짐 */
  }
`;
const Outer = styled.div`
  cursor: pointer;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 2rem;
  right: 3rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
  overflow: visible; /* 가상 요소가 바깥으로 보이도록 설정 */
  font-size: 1rem;
  font-weight: bold;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: 5px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }

  &:hover {
    /* hover 상태에서만 애니메이션 활성화 */
    &::after,
    &::before {
      opacity: 1;
      animation: ${ripple} 1s infinite cubic-bezier(0.65, 0, 0.34, 1);
    }
  }

  &::before {
    animation-delay: 0.5s; /* 딜레이 추가 */
  }
`;

const MenuList = styled.ul<{ $isMenuOpen: boolean }>`
  position: absolute;
  bottom: 7rem;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  overflow: hidden;
  font-size: 1.2rem;

  & > li:nth-child(1) {
    background-color: #7e7e7e;
    padding: 20px;
  }

  & > li:nth-child(2) {
    background-color: #000000;
  }

  & > li:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #096c09;
    padding: 20px;

    .icon-name {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

  ${({ $isMenuOpen }) =>
    $isMenuOpen
      ? css`
          opacity: 1;
          animation: ${drop} 0.3s ease-out;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
`;

// 드롭다운 메뉴 애니메이션
const slideUp = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const MenuItem = styled.li<{ delay: number }>`
  width: 5rem;
  height: 5rem;
  /* padding: 20px; */

  text-align: center;
  /* color: grey; */
  color: white;

  cursor: pointer;
  border-radius: 50%;

  .icon-name {
    font-size: 0.8rem;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  animation: ${slideUp} 0.5s ease forwards;
  animation-delay: ${({ delay }) => `${delay}s`};
`;

// 애니메이션 정의
const drop = keyframes`
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
