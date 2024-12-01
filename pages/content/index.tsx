import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Main = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 화면에 보이는 섹션들을 가져옴
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length > 0) {
          // 화면에 보이는 섹션 중 가장 위쪽 섹션 선택
          const topSection = visibleSections.reduce((prev, curr) => {
            return prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr;
          });

          const sectionName = topSection.target.getAttribute("data-section");
          if (sectionName) {
            setActiveSection(sectionName); // 가장 위쪽 섹션 활성화
          }
        } else {
          setActiveSection(null); // 화면에 보이는 섹션이 없을 경우 초기화
        }
      },
      { threshold: 0.5 } // 섹션의 50%가 화면에 보일 때 감지
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      {/* 전체 콘텐츠 */}
      {/* 첫 번째 페이지 */}
      <FirstPage>첫 번째 페이지</FirstPage>

      {/* 두 번째 페이지 */}
      <AboutPage>
        <Sidebar>
          {["Section 1", "Section 2", "Section 3"].map((section) => (
            <h1
              key={section}
              className={activeSection === section ? "active" : ""}
            >
              {section}
            </h1>
          ))}
        </Sidebar>

        <Content>
          {["Section 1", "Section 2", "Section 3"].map((section, index) => (
            <Section
              key={section}
              data-section={section}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
            >
              <h2>{section}</h2>
              <p>Content for {section} goes here.</p>
            </Section>
          ))}
        </Content>
      </AboutPage>
    </Layout>
  );
};

// 레이아웃 설정
const Layout = styled.div`
  position: relative;
  width: 100%;
  /* height: 100%; */
  /* overflow: hidden;  */
  /* 가로 스크롤 방지 */
`;

const FirstPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  font-size: 2rem;
  color: #333;

  top: 0;
  position: fixed;
  z-index: -1;
`;
const AboutPage = styled.div`
  display: flex;
  margin-top: 100vh; /* 첫 번째 페이지 아래에서 시작 */
  min-height: 100vh; /* 두 번째 페이지 최소 높이를 설정 */
  background-color: #1c1c1c;
  z-index: 5;
  border: 2px solid red;
`;

const Sidebar = styled.div`
  position: sticky;
  top: 0; /* 스크롤 시 상단에 고정 */
  height: 100vh; /* Sidebar의 높이를 화면 높이로 설정 */
  width: 25%;
  background-color: #1c1c1c;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #666;
    transition: color 0.3s ease;
  }

  h1:hover {
    color: #fff;
  }

  h1.active {
    color: red; /* 활성화된 섹션의 색상 */
  }
`;

const Content = styled.div`
  width: 75%; /* Sidebar 옆의 콘텐츠 영역 */
  padding: 2rem;
  background-color: #2e2e2e;
`;

const Section = styled.div`
  height: 100vh;
  margin-bottom: 2rem;
  color: #fff;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  border: 2px solid blue;
`;

export default Main;
