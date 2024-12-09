import React from "react";
import styled from "styled-components";
import { IProject } from "../../../../interfaces/Project";

interface ProjectDetailModalProps {
  project: IProject;
}
export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
}) => {
  return (
    <ModalSection>
      <Title>{project.name}</Title>
      {/* 사이트 이미지 (추후 배열) */}
      <ProjectImg>
        <img src={project.imgUrl[0].toString()} alt="project" />
      </ProjectImg>

      <DetailSection>
        <Subject>
          <SubTitle>소개</SubTitle>
          <Description>{project.detail}</Description>
        </Subject>

        <Subject>
          <SubTitle>사용기술</SubTitle>
          <Description className="stacks">
            {project.stack.map((stack, index) => (
              <div key={index} className="stack-item">
                {stack}
              </div>
            ))}
          </Description>
        </Subject>

        <Subject>
          <SubTitle>주요 작업</SubTitle>
          <Description>
            <>
              <PositionTitle>프론트엔드</PositionTitle>
              {project.frontendTasks.map((task, item) => (
                <TaskItem key={item}>{task}</TaskItem>
              ))}
            </>
            <br />
            <>
              <PositionTitle>백엔드</PositionTitle>
              {project.backendTasks.map((task, item) => (
                <TaskItem key={item}>{task}</TaskItem>
              ))}
            </>
          </Description>
        </Subject>
      </DetailSection>
    </ModalSection>
  );
};

// 상세모달
const ModalSection = styled.div`
  min-width: 10vw;
  width: 50vw;
  height: 80vh;
  padding: 0 2rem;

  overflow-y: scroll;
  color: #333;
  text-align: left;
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid lightgray;
`;
const ProjectImg = styled.div`
  width: 100%;
  aspect-ratio: 16/ 9;
  margin: 0 auto 2rem auto;
  background-color: lightgray;

  img {
    width: 100%;
  }
`;
const DetailSection = styled.div``;

const Subject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;
const SubTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;
const Description = styled.div`
  font-size: 1rem;

  &.stacks {
    display: flex;
    gap: 0.5rem;
  }
  .stack-item {
    background-color: #f2f2f2;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
  }
`;

const PositionTitle = styled.div`
  font-weight: bold;
`;
const TaskItem = styled.div`
  padding-left: 1rem;
`;
