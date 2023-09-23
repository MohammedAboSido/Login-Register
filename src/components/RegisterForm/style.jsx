import { Field } from "formik";
import styled from "styled-components";

export const RegisterFormWrapper = styled("div")`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RegisterFormContainer = styled("div")`
  width: 50%;
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;
export const RegisterFormTitle = styled("h3")`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
`;

export const LoginInputsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputField = styled(Field)`
  padding: 0.8rem;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
`;
export const AccountSignUpWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > a {
    font-size: 0.8rem;
    color: rgb(0, 0, 0);
  }
`;
export const Span = styled("span")`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.4);
`;
