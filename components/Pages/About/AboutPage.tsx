import React from "react";
import styled from "styled-components";
import Content from "./Content";
import Sidebar from "./Sidebar";
import dynamic from "next/dynamic";
import { AboutSection } from "./Section/AboutSection";

// 각 섹션의 데이터를 정의하는 인터페이스
interface SectionData {
  id: string; // sidebar와 content에서 매칭 기준으로 사용
  title: string;
  content: React.ReactNode; // 각 섹션 컴포넌트
}

const AboutPage = () => {
  // CSR 전용으로 설정
  const ProjectSection = dynamic(
    () => import("./Section/ProjectSection"),
    { ssr: false } // SSR 비활성화
  );
  const CareerSection = dynamic(
    () => import("./Section/CareerSection"),
    { ssr: false } // SSR 비활성화
  );
  const EduSection = dynamic(
    () => import("./Section/EduSection"),
    { ssr: false } // SSR 비활성화
  );

  // 각 섹션의 데이터 관리
  const sections: SectionData[] = [
    {
      id: "About Me",
      title: "About Me",
      content: <AboutSection />,
    },
    {
      id: "Career",
      title: "Career",
      content: <CareerSection />,
    },
    {
      id: "Project",
      title: "Project",
      content: <ProjectSection />,
    },
    {
      id: "Education",
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
  min-height: 100vh; // 두 번째 페이지 최소 높이를 설정
  background-color: #191919;
`;

export default AboutPage;
