import React from "react";
import styled from "styled-components";
import { IProject } from "../../../../interfaces/Project";
import { useTranslation } from "react-i18next";
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

interface ProjectDetailModalProps {
  project: IProject;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
}) => {
  const { t } = useTranslation("project");

  return (
    <ModalSection>
      <Title>{t(`${project.name}`)}</Title>
      {/* image */}

      {project.imgUrl && (
        <ProjectImg>
          {project.imgUrl.length > 1 ? (
            <>
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                  nextEl: ".custom-next-btn",
                  prevEl: ".custom-prev-btn",
                }}
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                loop
              >
                {project.imgUrl.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={`${img}`} alt={`slide-${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Custom navigation buttons */}
              <CustomPrevArrow className="custom-prev-btn" />
              <CustomNextArrow className="custom-next-btn" />
            </>
          ) : (
            <img src={`${project.imgUrl[0]}`} alt="project" />
          )}
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

// Custom buttons
const CustomNextArrow: React.FC<{
  className?: string;
  onClick?: () => void;
}> = ({ className, onClick }) => (
  <div
    className={`custom-next-btn ${className}`}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(138, 138, 138, 0.5)",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      zIndex: 1000,
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <img src="/icons/arrow-next.png" alt="next" style={{ width: "50%" }} />
  </div>
);
const CustomPrevArrow: React.FC<{
  className?: string;
  onClick?: () => void;
}> = ({ className, onClick }) => (
  <div
    className={`custom-prev-btn ${className}`}
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(138, 138, 138, 0.5)",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      zIndex: 1000,
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      cursor: "pointer",
    }}
    onClick={onClick}
  >
    <img src="/icons/arrow-prev.png" alt="prev" style={{ width: "50%" }} />
  </div>
);

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
  aspect-ratio: 16/ 9;
  width: 100%;
  margin: 0 auto 2rem auto;
  position: relative;
  /* 
  .slick-slide img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
  }
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-current {
    z-index: 1;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .nextArrow,
  .prevArrow {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 1000;
    display: flex;
    justify-content: center;
  }
  .prevArrow {
    left: 10px;
    top: 45%;
    padding: 10px 10px 10px 5px;
  }
  .nextArrow {
    right: 10px;
    top: 45%;
    padding: 10px 5px 10px 10px;
  } */
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: rgba(138, 138, 138, 0.8);
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid red;
  }

  .swiper-button-next img,
  .swiper-button-prev img {
    width: 50%;
    height: auto;
  }

  .swiper-pagination-bullet {
    background: rgba(138, 138, 138, 0.8);
  }

  .swiper-pagination-bullet-active {
    background: rgba(0, 0, 0, 0.9);
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
