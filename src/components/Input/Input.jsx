import { InputElement, InputWrapper, Label, LabelHint, Error } from './Styled';
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
    <InputWrapper className={className}>
      <InputElement
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
        <Label active={value !== ''}>
          {placeholder} <LabelHint>{labelHint}</LabelHint>
        </Label>
      )}
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
};

Input.Select = Select;
