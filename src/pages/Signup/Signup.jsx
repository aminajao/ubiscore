import React from 'react';
import * as Styled from './Styled';
import DashboardContainer from '../../containers/DashboardContainer/DashboardContainer';
import Logo from '../../assets/logo.svg';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/button';
import useFormValidator from 'use-form-input-validator';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();
  const { values, errors, updateField, isAllFieldsValid } = useFormValidator({
    websiteUrl: {
      value: '',
      checks: 'required',
      validate: (value) => {
        if (!value.startsWith('https://')) {
          return 'The link should start with https://';
        }
      },
    },
    workEmail: {
      value: '',
      checks: 'required',
      validate: (value) => {
        if (value.includes('gmail.com')) {
          return 'Please enter your business email address. This form does not accept addresses from gmail.com';
        }
      },
    },
    name: {
      value: '',
      checks: 'required',
    },
    howDidYouHear: {
      value: '',
      checks: 'required',
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAllFieldsValid()) {
      navigate('/success');
    }
  };

  return (
    <DashboardContainer>
      <Styled.Container>
        <Styled.LogoContainer>
          <img src={Logo} alt="logo" />
        </Styled.LogoContainer>
        <h1>Signup</h1>
        <p className="sub-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor{' '}
        </p>
        <Styled.FormContainer>
          <form onSubmit={handleSubmit}>
            <Input
              name="websiteUrl"
              onChange={updateField}
              value={values.websiteUrl}
              type="text"
              error={errors.websiteUrl}
              placeholder="Organization Website URL"
            />
            <Input
              name="workEmail"
              onChange={updateField}
              type="email"
              value={values.workEmail}
              error={errors.workEmail}
              placeholder="Work Email"
            />
            <Input
              name="name"
              onChange={updateField}
              type="text"
              value={values.name}
              error={errors.name}
              placeholder="Name"
            />
            <Input.Select
              name="howDidYouHear"
              onChange={updateField}
              value={values.howDidYouHear}
              error={errors.howDidYouHear}
              placeholder="How did you hear about us?"
            >
              <option value="Google Ad">Google Ad</option>
              <option value="Facebook">Facebook</option>
              <option value="Youtube">Youtube</option>
            </Input.Select>
            <Styled.TermsCondition>
              <input type="checkbox" name="" id="" />
              <p>Read and agree </p>
              <a href="/">Terms and Conditions.</a>
            </Styled.TermsCondition>
            <Button type="submit">Get started now</Button>
          </form>
        </Styled.FormContainer>
        <Styled.AlreadyRegistered>
          <p>Already have an account?</p>
          <a href="/">Login</a>
        </Styled.AlreadyRegistered>
      </Styled.Container>
    </DashboardContainer>
  );
};
