import React from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void; // 닫기 이벤트 핸들러
  children?: React.ReactNode; // 자식 요소
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      {" "}
      {/* 배경 클릭 시 모달 닫기 */}
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {/* 모달 내부 클릭 이벤트가 배경 클릭 이벤트로 전달되지 않도록 중단 */}
        <CloseButton onClick={onClose}>X</CloseButton> {/* 닫기 버튼 */}
        {children} {/* 부모로부터 전달된 자식 요소를 렌더링 */}
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed; /* 화면에 항상 고정 */
  top: 0; /* 화면의 맨 위 */
  left: 0; /* 화면의 맨 왼쪽 */
  width: 100%; /* 화면 전체 너비 */
  height: 100%; /* 화면 전체 높이 */
  background: rgba(0, 0, 0, 0.5); /* 어두운 반투명 배경 */
  display: flex; /* 내부 콘텐츠를 중앙에 배치하기 위해 flex 사용 */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  z-index: 1000; /* 다른 요소 위에 렌더링되도록 z-index 설정 */
`;
const ModalContent = styled.div`
  background: white; /* 모달 배경은 흰색 */
  padding: 2rem; /* 내부 여백 */
  border-radius: 10px; /* 모서리를 둥글게 처리 */
  max-width: 500px; /* 최대 너비 */
  width: 100%; /* 가로 크기를 부모 컨테이너에 맞춤 */
  position: relative; /* 닫기 버튼의 절대 위치를 위해 설정 */
`;
const CloseButton = styled.button`
  position: absolute; /* 모달 내부에서 절대 위치 */
  top: 10px; /* 상단 여백 */
  right: 10px; /* 오른쪽 여백 */
  background: none; /* 배경 제거 */
  border: none; /* 버튼 테두리 제거 */
  font-size: 1.5rem; /* 버튼 크기 */
  cursor: pointer; /* 클릭 가능한 커서 */
`;
