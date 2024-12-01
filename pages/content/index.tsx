import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Main = () => {
  const [activeSection, setActiveSection] = useState("Section 1");
  const mainRef = useRef<HTMLDivElement | null>(null);

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
    if (mainRef.current) {
      mainRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (mainRef.current) {
        mainRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <Layout ref={mainRef}>
      <FirstPage>첫 번째 페이지</FirstPage>
      <AboutPage>
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
        <Content>
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
      </AboutPage>
    </Layout>
  );
};

const Layout = styled.div`
  position: relative;
  height: auto;
  overflow-y: auto;
  background-color: #e8e5de;
`;

const FirstPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-size: 2rem;
  color: #333;
`;

const AboutPage = styled.div`
  position: relative;
  margin-top: 100vh;
  display: flex;
  background-color: #1c1c1c;
  z-index: 2;
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

  h1 {
    font-size: 1.5rem;
    color: #666;
    margin: 1rem 0;
    transition: color 0.3s ease;
  }

  h1.active {
    color: #fff;
  }
`;

const Content = styled.div`
  width: 75%;
  /* overflow-y: auto; */
  height: 100vh;
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
`;

export default Main;
