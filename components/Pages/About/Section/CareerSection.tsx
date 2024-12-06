import React from "react";
import styled from "styled-components";
import { careerData } from "../../../../data/careerData";

export const CareerSection = () => {
  return (
    <Outer>
      {careerData.map((item) => (
        <Card key={item.id}>
          <Logo>
            <img src={`/images/${item.logo}`} />
          </Logo>
          <Description>
            <div className="date">
              {item.startDate} - {item.endDate}
            </div>
            <div className="company">{item.companyName}</div>
            <div className="position">{item.position}</div>
            <div className="contribution">{item.contribute}</div>

            <StackContainer>
              {item.stack.map((item) => (
                <StackItem key={item}>{item}</StackItem>
              ))}
            </StackContainer>
          </Description>
        </Card>
      ))}
    </Outer>
  );
};

const Outer = styled.div`
  padding-top: 2rem;
  padding-left: 2rem;
  color: #f8f1e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Card = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;
const Logo = styled.div`
  width: 30%;

  img {
    /* width: 100%; */
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
  background-color: #ddddbe;
  border-radius: 1rem;
`;
