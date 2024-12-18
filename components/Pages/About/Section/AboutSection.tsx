import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { aboutData } from "../../../../data/aboutData";

export const AboutSection = () => {
  const { t } = useTranslation("aboutMe");

  const renderTextWithLineBreaks = (text: string) =>
    text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));

  return (
    <Outer>
      {aboutData.map((about) => {
        const translatedAbout = t(`${about.id}`, {
          returnObjects: true,
        }) as {
          title: string;
          description: string;
        };

        return (
          <Section key={about.id}>
            <Title>{t(`${translatedAbout.title}`)}</Title>
            <Description>
              {renderTextWithLineBreaks(t(translatedAbout.description))}
            </Description>
          </Section>
        );
      })}
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
