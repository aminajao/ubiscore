import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  color: #101525;
  margin: 0 40px;
  min-height: 95vh;
  padding: 50px;
  border-radius: 0 0 8px 8px;

  .sub-text {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #000000;
    opacity: 0.6;
    margin-top: 10px;
  }
`;
export const LogoContainer = styled.div`
  margin-bottom: 80px;
`;
export const GoBackContainer = styled.div`
  margin-top: 72px;

  div {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 20px;

    a {
      margin-left: 5px;
    }
  }
`;
