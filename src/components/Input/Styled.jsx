import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 26px;
  margin-bottom: 10px;
  width: 100%;
  &:focus-within {
    label {
      transform: translate(10px, -10px) scale(0.9);
    }
  }
`;

export const Label = styled('label')`
  font-size: 14px;
  padding: 0px 10px;
  color: #999bac;
  pointer-events: none;
  position: absolute;
  font-weight: normal;
  left: 2px;
  transform: ${(props) =>
    props.active
      ? 'translate(10px, -10px) scale(0.9)'
      : 'translate(8px, 14px) scale(1)'};
  background: #fff;
  transform-origin: top left;
  transition: all 0.2s ease-out;
`;

export const InputElement = styled('input')`
  width: 90%;
  min-height: 48px;
  padding: 18px 16px;
  outline: 0;
  border-radius: 5px;
  background: #fff;
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #101525;

  color: ${(props) => {
    if (props.error) {
      return '#cf0000';
    }
    return '#101525';
  }};
  border: ${(props) => {
    if (props.error) {
      return '1px solid #cf0000';
    } else if (props.active) {
      return '1px solid #0A74DC';
    }
    return '1px solid #d6d8dc';
  }};
`;

export const LabelHint = styled.span``;

export const SelectElement = styled('select')`
  width: 90%;
  min-height: 48px;
  padding: 18px 16px;
  outline: 0;
  border-radius: 5px;
  background: #fff;
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #101525;
  border: ${(props) => {
    if (props.error) {
      return '1px solid #cf0000';
    } else if (props.active) {
      return '1px solid #0A74DC';
    }
    return '1px solid #d6d8dc';
  }};
`;

export const Error = styled.div`
  margin-top: 10px;
  color: #ff939c;
  font-weight: 400;
  font-size: 14px;
`;
