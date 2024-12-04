import React, { useEffect } from "react";
import styled from "styled-components";

interface SidebarProps {
  sections: string[];
  activeSection: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeSection }) => {
  useEffect(() => {
    console.log("sections : ", sections);
    console.log("activeSection : ", activeSection);
  }, []);
  return (
    <Outer>
      <ProfileImg></ProfileImg>
      {sections.map((section) => (
        <h1 key={section} className={activeSection === section ? "active" : ""}>
          {section}
        </h1>
      ))}
    </Outer>
  );
};

const Outer = styled.div`
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
    font-size: 1.9rem;
    margin: 1rem 0;
    color: #666;
    transition: color 0.3s ease;
  }

  /* h1:hover {
    color: #fff;
  } */

  h1.active {
    color: #fff; /* 활성화된 섹션의 색상 */
  }
`;

const ProfileImg = styled.div`
  border-radius: 50%;
  width: 10vw;
  height: 10vw;
  margin-bottom: 2vw;

  border: 1px solid white;
`;

export default Sidebar;
