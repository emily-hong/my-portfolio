import React from "react";
import styled from "styled-components";
import { IProject } from "../../../../interfaces/Project";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

interface ProjectDetailModalProps {
  project: IProject;
}
export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
}) => {
  const { t } = useTranslation("project");

  // react slick setting
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <ModalSection>
      <Title>{t(`${project.name}`)}</Title>
      {/* image */}
      {project.imgUrl && (
        <ProjectImg>
          <img src={`${project.imgUrl[0]}`} alt="project" />
        </ProjectImg>
      )}

      {/* video */}
      {project.videoUrl && (
        <ProjectImg>
          <iframe
            src={`${project.videoUrl}`}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </ProjectImg>
      )}

      <DetailSection>
        <Subject>
          <SubTitle>소개</SubTitle>
          <Description>{t(`${project.detail}`)}</Description>
          {/* 관련 링크 : 깃허브, 운영url 등 */}
          {project.links && (
            <LinkSection>
              <SubTitle>관련 링크</SubTitle>
              {project.links.map((link, index) => {
                return (
                  <Link key={index}>
                    {link.github && (
                      <a href={link.github} target="_blank">
                        <img src="/icons/github-black.png" alt="github" />
                      </a>
                    )}
                    {link.deploy && (
                      <a href={link.deploy} target="_blank">
                        <img src="/icons/deploy-black.png" alt="deploy" />
                      </a>
                    )}
                  </Link>
                );
              })}
            </LinkSection>
          )}
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
            {project.frontendTasks && (
              <>
                <PositionTitle>&nbsp;프론트엔드</PositionTitle>
                {project.frontendTasks.map((task, index) => (
                  <TaskItem key={index}>
                    {t(`${project.id}.frontendTasks.${index}`)}
                    {/* 번역 키로 처리 */}
                  </TaskItem>
                ))}
              </>
            )}
            <br />
            {project.backendTasks && (
              <>
                <PositionTitle>&nbsp;백엔드</PositionTitle>
                {project.backendTasks.map((task, index) => (
                  <TaskItem key={index}>
                    {t(`${project.id}.backendTasks.${index}`)}
                    {/* 번역 키로 처리 */}
                  </TaskItem>
                ))}
              </>
            )}
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
  margin-top: 1rem;

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
const LinkSection = styled.div``;
const Link = styled.div`
  margin-top: 1rem;
  width: 2rem;
  height: 2rem;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

const PositionTitle = styled.div`
  font-weight: bold;
`;
const TaskItem = styled.div`
  padding-left: 1rem;
`;
