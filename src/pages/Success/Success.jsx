import React from 'react';
import * as Styled from './Styled';
import DashboardContainer from '../../containers/DashboardContainer/DashboardContainer';
import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button/button';
import { useNavigate } from 'react-router-dom';

export const Success = () => {
  const navigate = useNavigate();
  return (
    <DashboardContainer>
      <Styled.Container>
        <Styled.LogoContainer>
          <img src={Logo} alt="logo" />
        </Styled.LogoContainer>
        <h1>Thank You...</h1>
        <p className="sub-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor
        </p>
        <Styled.GoBackContainer>
          <Button
            onClick={() => navigate(-1)}
            padding="19px 64px"
            type="submit"
          >
            Back to Home
          </Button>
          <div>
            <p>Questions? Email us </p>
            <a href="/"> help@ubiscore.com</a>
          </div>
        </Styled.GoBackContainer>
      </Styled.Container>
    </DashboardContainer>
  );
};
