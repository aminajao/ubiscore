import { SelectElement, InputWrapper, Label, LabelHint, Error } from './Styled';

export const Select = ({
  name,
  onChange,
  className,
  isDisabled,
  error = '',
  value,
  label,
  children,
  labelHint,
  placeholder,
  ...props
}) => {
  error = error ? error.toString() : '';
  return (
    <InputWrapper className={className}>
      <div className="relative">
        <SelectElement
          error={error}
          active={value !== ''}
          type="password"
          name={name}
          onChange={onChange}
          value={value}
          disabled={isDisabled}
          autoComplete="off"
          {...props}
        >
          {children}
        </SelectElement>
      </div>
      {placeholder && (
        <Label active={value !== ''}>
          {placeholder} <LabelHint>{labelHint}</LabelHint>
        </Label>
      )}
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
};
