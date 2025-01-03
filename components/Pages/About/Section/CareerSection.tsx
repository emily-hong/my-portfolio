import React, { useTransition } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { careerData } from "../../../../data/careerData";

const CareerSection = () => {
  const { t } = useTranslation("career");

  return (
    <Outer>
      {careerData.map((career) => {
        const translatedCareer = t(`${career.id}`, {
          returnObjects: true,
        }) as {
          companyName: string;
          position: string;
          contribute: string;
        };

        return (
          <Card key={career.id}>
            <Logo>
              <img src={`/images/${career.logo}`} />
            </Logo>
            <Description>
              <div className="date">
                {career.startDate} - {career.endDate}
              </div>
              <div className="company">{translatedCareer.companyName}</div>
              <div className="position">{translatedCareer.position}</div>
              <div className="contribution">{translatedCareer.contribute}</div>

              <StackContainer>
                {career.stack.map((stack) => (
                  <StackItem key={stack}>{stack}</StackItem>
                ))}
              </StackContainer>
            </Description>
          </Card>
        );
      })}
    </Outer>
  );
};

const Outer = styled.div`
  padding-left: 2rem;
  color: #f8f1e5;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
const Card = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;
const Logo = styled.div`
  width: 30%;

  img {
    height: 100%;
  }
`;
const Description = styled.div`
  width: 65%;
  margin-left: 1rem;
  padding: 0 1.2rem;
  font-size: 1.2rem;
  border-left: 1px solid white;

  .date {
    margin-bottom: 0.5rem;
    color: #7a7979;
  }
  .company {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .position {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  .contribution {
    font-size: 1.2rem;
    line-height: 1.5;
    word-break: normal; /* 단어 단위로 줄바꿈 */
    white-space: normal; /* 텍스트 줄바꿈 허용 */
    overflow-wrap: break-word; /* 긴 단어는 다음 줄로 강제 줄바꿈 */
  }
`;
const StackContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: black;
`;

const StackItem = styled.div`
  width: fit-content;
  padding: 0.2rem 1rem;
  background-color: #9a9a9a;

  border-radius: 1rem;
`;

export default CareerSection;
