import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "../../../UI/Modal";
import { projectData } from "../../../../data/projectData";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { useTranslation } from "react-i18next";

const ProjectSection = () => {
  const { t, i18n } = useTranslation("project");
  const currentLanguage = i18n.language;

  // 필터옵션
  const [filterOption, setFilterOption] = useState("All");
  // 상세모달창 오픈여부
  const [modalOpen, setModalOpen] = useState<number | null>(null);

  // 필터버튼 처리
  const filteredProjects = projectData.filter((project) => {
    if (filterOption === "All") return true;
    return project.type === filterOption; // type이 Team 또는 Personal과 일치
  });

  // 상세모달
  const openModal = (id: number) => setModalOpen(id);
  const closeModal = () => setModalOpen(null);

  return (
    <Outer>
      <FilterButtons>
        {["All", "Team", "Personal"].map((option) => (
          <FilterButton
            key={option}
            className={filterOption === option ? "active" : ""}
            onClick={() => setFilterOption(option)}
          >
            {option}
          </FilterButton>
        ))}
      </FilterButtons>

      <CardList>
        {filteredProjects
          .sort((a, b) => b.id - a.id)
          .map((project) => {
            // 번역 데이터 가져오기
            const translatedProject = t(`${project.id}`, {
              returnObjects: true,
            }) as {
              name: string;
              summary: string;
            };

            return (
              <Card
                key={project.id}
                className={modalOpen !== null ? "modal-active" : ""}
                // onClick={() => openModal(project.id)}
              >
                <div className="project-name">{translatedProject.name}</div>
                <HoverDiv className="card-hover">
                  <Button
                    // className="card-button"
                    onClick={() => openModal(project.id)}
                  >
                    {currentLanguage === "ko" ? "상세보기" : "Detail View"}
                  </Button>
                </HoverDiv>
                <div className="project-summary">
                  {translatedProject.summary}
                </div>
                <hr />
                <div className="project-stack">
                  {project.stack.map((stack, index) => (
                    <div key={index} className="project-stack-item">
                      {stack}
                    </div>
                  ))}
                </div>

                {/* 모달창 */}
                {modalOpen && (
                  <Modal isOpen={modalOpen == project.id} onClose={closeModal}>
                    <ProjectDetailModal project={project} />
                  </Modal>
                )}
              </Card>
            );
          })}
      </CardList>
    </Outer>
  );
};

const Outer = styled.div`
  position: relative;

  @media (max-width: 1499px) {
  }
  @media (max-width: 768px) {
    /* 태블릿 이상 */
  }
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const FilterButton = styled.div`
  cursor: pointer;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  font-size: 1.3rem;

  &.active {
    background-color: #f5f5f5;
    color: #333;
  }

  &:not(.active) {
    background-color: #333333;
    color: #f8f1e5;
  }

  &:hover {
    background-color: #555555;
    color: #f8f1e5;
  }
`;

const CardList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding: 1rem 2rem;
`;
const Card = styled.div`
  background-color: #333333;
  color: #f8f1e5;
  aspect-ratio: 1; /* 비율을 1:1로 유지 */
  border-radius: 1rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1vw;
  position: relative;

  overflow: hidden;

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
    gap: 0.8rem;
    flex-wrap: wrap;
    font-size: 1rem;
  }
  .project-stack-item {
    width: fit-content;
    padding: 0.2rem 0.6rem;
    background-color: #9a9a9a;
    color: black;
    border-radius: 20px;
  }

  &.modal-active {
    cursor: default;
  }
  &:not(.modal-active):hover .card-hover {
    visibility: visible;
  }
`;
const HoverDiv = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
`;

const Button = styled.div`
  border: 2px solid #eaeaea;
  font-size: 1.5rem;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
`;

export default ProjectSection;
