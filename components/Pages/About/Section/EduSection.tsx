import React from "react";
import styled from "styled-components";
import { eduData } from "../../../../data/eduData";
import { IEdu } from "../../../../interfaces/Edu";

export const EduSection = () => {
  return (
    <Outer>
      <Section>
        <CustomLine>
          <div className="circle top"></div>
          <div className="line"></div>
          <div className="circle bottom"></div>
        </CustomLine>

        <Content>
          {eduData
            .sort((a, b) => b.id - a.id)
            .map((edu: IEdu) => (
              <ContentItem key={edu.id}>
                <div className="date">{edu.date}</div>
                <div className="name">{edu.academy}</div>
                <div className="summary">{edu.summary}</div>
                <div className="description">{edu.description}</div>
                <div className="stack">
                  {edu.stack.map((item, index) => (
                    <div key={index} className="stack-item">
                      {item}
                    </div>
                  ))}
                </div>
              </ContentItem>
            ))}
        </Content>
      </Section>
    </Outer>
  );
};

const Outer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 2rem;
`;
const Section = styled.div`
  display: flex;
  gap: 5vw;
  height: fit-content;
`;
const CustomLine = styled.div`
  position: relative;
  width: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .line {
    width: 1px;
    height: 100%;
    background-color: #fff;
  }
  .circle {
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
  }
  .circle.top {
    top: 0;
    transform: translateY(-50%);
  }
  .circle.bottom {
    bottom: 0;
    transform: translateY(50%);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vw;
  line-height: 1.4;
`;
const ContentItem = styled.div`
  width: 80%;

  .name {
    font-weight: bold;
    font-size: 2rem;
  }
  .date {
    font-size: 1rem;
    color: #7a7979;
  }
  .summary {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .descrption {
    font-size: 1.2rem;
  }
  .stack {
    width: fit-content;
    display: flex;
    margin-top: 1rem;
    padding: 0.3rem 0.8rem;
    gap: 1rem;
    border-radius: 10px;
    font-weight: bold;
    background-color: #9a9a9a;
    color: #333;
  }
`;
