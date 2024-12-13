import React, { useEffect } from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void; // 닫기 이벤트 핸들러
  children?: React.ReactNode; // 자식 요소
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // 모달 열릴 때 body 스크롤 비활성화
      document.body.style.overflow = "hidden";
    } else {
      // 모달 닫힐 때 body 스크롤 초기화
      document.body.style.overflow = "";
    }

    return () => {
      // 컴포넌트 언마운트 시 body 스크롤 초기화
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      {/* 배경 클릭 시 모달 닫기 */}
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {/* 모달 내부 클릭 이벤트가 배경 클릭 이벤트로 전달되지 않도록 중단 */}
        <CloseButton onClick={onClose}>
          <img src="/icons/close.png" />
        </CloseButton>{" "}
        {/* 닫기 버튼 */}
        {children} {/* 부모로부터 전달된 자식 요소를 렌더링 */}
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* 다른 요소 위에 렌더링되도록 z-index 설정 */
  overflow: hidden;
`;
const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  /* max-width: 500px; */
  width: fit-content;
  position: relative; /* 닫기 버튼의 절대 위치를 위해 설정 */
`;
const CloseButton = styled.button`
  cursor: pointer;
  position: absolute; /* 모달 내부에서 절대 위치 */
  top: 1rem;
  right: 1rem;
  width: 2rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
