import React from 'react';
import styled from 'styled-components';

export const Button = ({ children, type = 'button', padding, ...props }) => {
  return (
    <StyledButton padding={padding} type={type} {...props}>
      <>{children}</>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: #4285de;
  font-weight: 500;
  font-size: 18px;
  padding: 19px 120px;
  color: #ffffff;
  border-radius: 5px;
  padding: ${(props) => props.padding};
  }};
`;
