import React from 'react';
import * as Styled from './Styled';
import Triangle from '../../assets/triangle.svg';
import Circle from '../../assets/circle.svg';

const DashboardContainer = (props) => {
  return (
    <Styled.Container>
      <Styled.LeftContent>
        <Styled.TriangleIcon>
          <img src={Triangle} alt="triangle icon" />
        </Styled.TriangleIcon>
        <Styled.CircleIcon>
          <img src={Circle} alt="circle icon" />
        </Styled.CircleIcon>
        <h1>Jerrome Bell</h1>
        <p className="skill">Product Desginer</p>
        <p>
          “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.{' '}
        </p>
      </Styled.LeftContent>
      <Styled.RightContent>{props.children}</Styled.RightContent>
    </Styled.Container>
  );
};

export default DashboardContainer;
