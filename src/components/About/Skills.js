import React from "react";
import styled from "styled-components";

const SkillContent = styled.div`
  * {
    margin: 0;
  }
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SkillItems = styled.div`
  display: flex;
  position: absolute;
  left: 6.5rem;

  @media screen and (max-width: 500px) {
    position: initial;
    margin-top: 10px;
  }
`;

const Item = styled.div`
  padding: 5px;
  border-radius: 6px;
  background-color: #6f4cff;
  background: #f8faff;
  margin-right: 10px;
`;

const PTitle = styled.p`
  font-size: 14px;
`;

const SkillTopic = styled.h5`
  font-size: 16px;
`;

const Skills = ({ topic, skills }) => (
  <>
    <SkillContent>
      <SkillTopic>{topic}</SkillTopic>
      <SkillItems>
        {skills.map(item => (
          <Item key={item.id}>
            <PTitle>{item.skill}</PTitle>
          </Item>
        ))}
      </SkillItems>
    </SkillContent>
  </>
);

export default Skills;
