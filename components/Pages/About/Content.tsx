import React, { useRef, useEffect } from "react";
import styled from "styled-components";

interface ContentProps {
  sectionsData: {
    id: string;
    title: string;
    content: React.ReactNode; // 섹션별로 렌더링할 컨텐츠
  }[];
  setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
}

const Content: React.FC<ContentProps> = ({
  sectionsData,
  setActiveSection,
}) => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length > 0) {
          const topSection = visibleSections.reduce((prev, curr) => {
            return prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr;
          });
          const sectionName = topSection.target.getAttribute("data-section");
          if (sectionName) setActiveSection(sectionName);
        } else {
          setActiveSection(null);
        }
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveSection]);

  return (
    <Outer>
      {sectionsData.map((section, index) => (
        <Section
          key={section.id}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          data-section={section.id}
        >
          <h2>{section.title}</h2>
          {section.content}
        </Section>
      ))}
    </Outer>
  );
};

const Outer = styled.div`
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

export default Content;
