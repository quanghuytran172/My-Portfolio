import React from "react";
import styled from "styled-components";

const WrappedEducation = styled.div`
  display: flex;
  * {
    margin: 0;
  }
`;

const Icon = styled.span`
  display: flex;
  padding: 10px;
  border-radius: 50rem;
  background: #6f4cff;

  ion-icon {
    font-size: 20px;
    color: #fff;
  }
`;
const Content = styled.div`
  padding-left: 18px;
`;

const TimeLine = styled.p`
  color: #6f4cff;
  font-size: 15px;
`;

const ContentTitle = styled.h5`
  font-size: 16px;
`;
const SubTitle = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

const Education = ({ data }) => {
  const { iconName, timeline, title, subTitle } = data;

  return (
    <>
      <WrappedEducation className="mt-3">
        <div>
          <Icon>
            <ion-icon name={iconName} />
          </Icon>
        </div>
        <Content>
          <TimeLine>{timeline}</TimeLine>
          <ContentTitle>{title}</ContentTitle>
          <SubTitle>{subTitle}</SubTitle>
        </Content>
      </WrappedEducation>
    </>
  );
};

export default Education;
