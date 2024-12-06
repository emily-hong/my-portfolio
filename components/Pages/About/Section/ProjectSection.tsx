import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../../../UI/Modal";
import { projectData } from "../../../../data/projectData";

export const ProjectSection = () => {
  // 상세모달창 오픈여부
  const [modalOpen, setModalOpen] = useState<number | null>(null);

  // 상세모달
  const openModal = (id: number) => setModalOpen(id);
  const closeModal = () => setModalOpen(null);

  return (
    <Outer>
      <CardList>
        {projectData.map((project) => (
          <Card
            key={project.id}
            // onClick={() => openModal(project.id)}
          >
            <div className="project-name">{project.name}</div>
            <HoverDiv className="card-hover">
              <Button
                // className="card-button"
                onClick={() => openModal(project.id)}
              >
                상세보기
              </Button>
            </HoverDiv>
            <div className="project-summary">{project.summary}</div>
            <hr />
            <div className="project-stack">
              {project.stack.map((stack) => (
                <div className="project-stack-item">{stack}</div>
              ))}
            </div>

            {/* 모달창 */}
            {modalOpen && (
              <Modal isOpen={modalOpen == project.id} onClose={closeModal}>
                <Title>{project.name}</Title>

                <ProjectImg>
                  <img src="" alt="" />
                </ProjectImg>
              </Modal>
            )}
          </Card>
        ))}
      </CardList>
    </Outer>
  );
};

const Outer = styled.div``;
const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 열 */
  gap: 2rem; /* 요소 간의 간격 */
  padding: 1rem;
`;
const Card = styled.div`
  cursor: pointer;
  background-color: #333333;
  color: #ffffff;
  aspect-ratio: 1; /* 비율을 1:1로 유지 */
  border-radius: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1vw;
  position: relative;

  overflow: hidden; /* 버튼이 카드 밖으로 넘어가지 않도록 설정 */

  .project-name {
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  hr {
    width: 100%;
    margin: 1rem 0;
    border: 1px solid darkgray;
  }
  .project-summary {
    font-size: 1.2rem;
  }
  .project-stack {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .project-stack-item {
    width: fit-content;
    padding: 0.2rem 0.6rem;
    background-color: #ddddbe;
    color: black;
    border-radius: 1rem;
  }

  &:hover .card-hover {
    visibility: visible; /* Hover 시 표시 */
  }
`;
const HoverDiv = styled.div`
  position: absolute; /* Card 내부에서 절대 위치 */
  top: 0; /* 부모(Card) 기준 상단부터 */
  left: 0; /* 부모(Card) 기준 왼쪽부터 */
  width: 100%; /* 부모(Card) 너비와 동일 */
  height: 100%; /* 부모(Card) 높이와 동일 */
  background-color: rgba(0, 0, 0, 0.8); /* 배경만 투명하게 설정 */
  z-index: 1; /* 다른 요소 위에 표시 */
  display: flex; /* 내부 버튼 정렬을 위한 flex */
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center; /* 가로 중앙 정렬 */
  visibility: hidden; /* 기본적으로 숨김 */
  /* transition: visibility 0.3s ease, opacity 0.3s ease; */
`;

const Button = styled.div`
  border: 2px solid white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
`;

// 상세모달
const Title = styled.div`
  font-size: 2rem;
  color: black;
`;
const ProjectImg = styled.div`
  border: 1px solid red;
  img {
    width: 100%;
  }
`;
