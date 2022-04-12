import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  color: #ffffff;
`;
export const LeftContent = styled.div`
  background: #141933;
  position: relative;
  width: 712px;
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
`;
export const RightContent = styled.div`
  flex: 55%;
  background: #e5e5e5;
  width: min-content;
  overflow: scroll;
  padding-bottom: 40px;
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
