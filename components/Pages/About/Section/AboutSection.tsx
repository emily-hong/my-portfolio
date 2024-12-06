import React from "react";
import styled from "styled-components";

export const AboutSection = () => {
  return (
    <Outer>
      <Section>
        <Title>
          사용자의 관점을 가장 중요하게 생각하며 성장하는 개발자 홍현정입니다.
        </Title>
        <Description>
          IT 서비스는 사용자의 삶을 편리하게 만드는 데 그 가치를 둔다고 믿으며,
          더 나은 서비스를 만들기 위해 노력하고 있습니다.
          <br />
          저는 크고 작은 문제를 해결하며 성장하는 과정에서 보람을 느낍니다.
          <br />
          <br />
          특히, 협업 중에 발생하는 복잡한 문제를 끝까지 해결해내는 끈기와
          실행력을 제 강점으로 삼고 있습니다. <br />
          사용자 중심의 관점을 잃지 않고 서비스를 설계하며, <br />
          안정적이고 만족스러운 서비스를 제공하기 위해 끊임없이 고민하고
          도전합니다.
          <br />
          <br />
          이런 저의 자세와 성장을 믿고 함께 나아갈 회사를 찾고 있습니다.
        </Description>
      </Section>

      <Section>
        <Title>풀스택 개발자가 되고자 하는 이유</Title>
        <Description>
          저는 프론트엔드 개발자로서 2년간 사용자 친화적인 UI와 UX를 설계하며 웹
          개발의 재미를 느껴왔습니다.
          <br />
          하지만 프로젝트를 진행하며, API 통신과 데이터 모델링 과정에서 백엔드의
          중요성을 깨닫고,
          <br />더 효율적이고 안정적인 서비스를 만들기 위해 풀스택 개발자가
          되기로 결심했습니다.
          <br />
          <br />
          이를 위해 자바를 중심으로 한 백엔드 기술을 배우며 <br />
          RESTful API 설계, 데이터베이스 관리, 서버 로직 구현 등 실질적인 역량을
          키웠습니다.
          <br />
          이 과정에서 프론트엔드와 백엔드가 유기적으로 연결될 때 서비스의
          완성도가 높아진다는 것을 체감했습니다.
          <br />
          <br />
          앞으로는 풀스택 개발자로서 UI/UX 설계와 안정적인 서버 로직을 통해
          <br />더 완성도 높은 서비스를 제공하며, 팀에 꼭 필요한 개발자가 되고자
          합니다.
        </Description>
      </Section>
    </Outer>
  );
};

const Outer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Section = styled.div`
  width: 90%;
  /* color: #cccccc; */
  color: #f8f1e5;
  line-height: 1.3;
  padding: 1rem;
  background-color: #424242;
  border-radius: 1rem;

  .focus {
    font-weight: bold;
  }
`;
const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.div`
  font-size: 1rem;
`;

const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;

  border: 1px solid red;
`;
const IconConatiner = styled.div`
  .icon-container {
    width: 1vw;
    height: 1vw;
  }
  img {
    height: 100%;
  }
`;
