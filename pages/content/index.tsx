import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FirstPage } from "../../components/Pages/First/FirstPage";
import AboutPage from "../../components/Pages/About/AboutPage";
import { ContactButton } from "../../components/UI/ContactButton";

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
      <FirstPage />
      {/* 두 번째 페이지 */}
      <AboutPage />
      {/* 연락처 토글 */}
      <ContactButton />
    </Layout>
  );
};

// 레이아웃 설정
const Layout = styled.div`
  position: relative;
  width: 100%;
  /* overflow: hidden;  */
  /* 가로 스크롤 방지 */
`;

export default Main;
