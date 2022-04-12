import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  color: #101525;
  margin: 0 40px;
  min-height: 90vh;
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
export const FormContainer = styled.div`
  margin-top: 44px;
`;
export const TermsCondition = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 44px;

  input {
    margin-right: 20px;
    width: 24px;
    height: 24px;
  }
  p {
    color: #6d707a;
    font-weight: 400;
    font-size: 16px;
  }
  a {
    margin-left: 20px;
    color: #4285de;
  }
`;

export const AlreadyRegistered = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 20px;

  p {
    color: #6d707a;
  }

  a {
    margin-left: 10px;
    font-weight: 600;
    font-size: 16px;
    text-decoration: none;
  }
`;
