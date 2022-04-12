import React from 'react';
import { ReactComponent as Loader } from '../../assets/loading.svg';
import styled from 'styled-components';

export const Button = ({
  children,
  type = 'button',
  isLoading,
  isDisabled,
  className,
  padding,
  ...props
}) => {
  return (
    <StyledButton padding={padding} type={type} {...props}>
      <>{children}</>
      {isLoading && <Loader className="h-5 w-5 ml-3 animate-pulse" />}
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
