import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  color: #ffffff;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: max-content;
  }
`;
export const LeftContent = styled.div`
  background: #141933;
  position: relative;
  flex: 1;

  padding: 100px 120px 0 120px;

  h1 {
    font-size: 21px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 2px;
  }

  p {
    font-weight: 400;
    font-size: 15px;
    color: #ffffff;
    width: 90%;
  }

  .skill {
    font-size: 15px;
    margin-bottom: 22px;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    opacity: 0.6;
  }

  @media only screen and (max-width: 1024px) {
    padding: 100px 50px 0 50px;
  }
  @media only screen and (max-width: 768px) {
    padding: 50px;
  }
`;
export const RightContent = styled.div`
  flex: 1;
  background: #e5e5e5;
  overflow: scroll;
  padding-bottom: 40px;

  @media only screen and (max-width: 768px) {
    overflow: none;
  }
`;

export const TriangleIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
export const CircleIcon = styled.div`
  position: absolute;
  top: 200px;
  right: 120px;
`;
