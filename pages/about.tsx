import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("Section 1");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setActiveSection(section.getAttribute("data-section") || "");
      }
    });
  };

  useEffect(() => {
    const content = document.querySelector(".content");
    content?.addEventListener("scroll", handleScroll);
    return () => content?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* 왼쪽 고정 사이드바 */}
      <Sidebar>
        <h1 className={activeSection === "Section 1" ? "active" : ""}>
          Section 1
        </h1>
        <h1 className={activeSection === "Section 2" ? "active" : ""}>
          Section 2
        </h1>
        <h1 className={activeSection === "Section 3" ? "active" : ""}>
          Section 3
        </h1>
      </Sidebar>

      {/* 오른쪽 스크롤 콘텐츠 */}
      <Content className="content">
        <Section className="section" data-section="Section 1">
          <h2>Section 1</h2>
          <p>Content for Section 1 goes here.</p>
        </Section>
        <Section className="section" data-section="Section 2">
          <h2>Section 2</h2>
          <p>Content for Section 2 goes here.</p>
        </Section>
        <Section className="section" data-section="Section 3">
          <h2>Section 3</h2>
          <p>Content for Section 3 goes here.</p>
        </Section>
      </Content>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Sidebar = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 25%;
  background-color: #1c1c1c;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 3rem;
    color: #666;
    margin: 2rem 0;
    transition: color 0.3s ease;
  }

  h1.active {
    color: #fff;
  }
`;

const Content = styled.div`
  width: 75%;
  overflow-y: auto;
  padding: 2rem;
  background-color: #2e2e2e;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
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
`;

export default AboutPage;
