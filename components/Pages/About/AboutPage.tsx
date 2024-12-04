import React from "react";
import styled from "styled-components";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { CareerSection } from "./Section/CareerSection";
import { AboutSection } from "./Section/AboutSection";
import { ProjectSection } from "./Section/ProjectSection";
import { EduSection } from "./Section/EduSection";

/*
  두 번째 페이지
  About Me : 자기소개, 깃허브, 블로그주소, 이메일
  Carrer : 경력사항
  Project : 작업했던 프로젝트 소개, 모달창 상세소개 
  Education : 개발 관련 교육 이수 내용
*/

// 각 섹션의 데이터를 정의하는 인터페이스
interface SectionData {
  id: string; // sidebar와 content에서 매칭 기준으로 사용
  title: string;
  content: React.ReactNode; // 각 섹션 컴포넌트
}

const AboutPage = () => {
  // 각 섹션의 데이터 관리
  const sections: SectionData[] = [
    {
      id: "about",
      title: "About Me",
      content: <AboutSection />,
    },
    {
      id: "career",
      title: "Career",
      content: <CareerSection />,
    },
    {
      id: "project",
      title: "Project",
      content: <ProjectSection />,
    },
    {
      id: "education",
      title: "Education",
      content: <EduSection />,
    },
  ];
  // 현재 화면에 표시되고 있는 섹션의 id를 저장
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  return (
    <Outer>
      {/* 왼쪽 사이드바 */}
      <Sidebar
        sections={sections.map((section) => section.id)}
        activeSection={activeSection}
      />
      {/* 오른쪽 영역 */}
      <Content sectionsData={sections} setActiveSection={setActiveSection} />
    </Outer>
  );
};

const Outer = styled.div`
  display: flex;
  margin-top: 100vh; /* 첫 번째 페이지 아래에서 시작 */
  min-height: 100vh; /* 두 번째 페이지 최소 높이를 설정 */
  background-color: #1c1c1c;
  z-index: 5;
  border: 2px solid red;
`;

export default AboutPage;
