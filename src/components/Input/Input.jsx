import * as Styled from './Styled';
import { Select } from './Select';

export const Input = ({
  type,
  className,
  label,
  error = '',
  isDisabled,
  name,
  labelHint,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  error = error ? error.toString() : '';

  return (
    <Styled.InputWrapper className={className}>
      <Styled.InputElement
        error={error}
        active={value !== ''}
        type={type}
        name={name}
        disabled={isDisabled}
        value={value}
        onChange={onChange}
        autoComplete="off"
        {...props}
      />
      {placeholder && (
        <Styled.Label active={value !== ''}>
          {placeholder} <Styled.LabelHint>{labelHint}</Styled.LabelHint>
        </Styled.Label>
      )}
      {error && <Styled.Error>{error}</Styled.Error>}
    </Styled.InputWrapper>
  );
};

Input.Select = Select;
