import { Formik } from "formik";
import { Link } from "react-router-dom";
import { PATH } from "../../constants/index";
import { schema } from "../../utils/registerSchema";
import Button from "../Button/Button";
import {
  AccountSignUpWrapper,
  InputField,
  LoginInputsWrapper,
  RegisterFormContainer,
  RegisterFormTitle,
  RegisterFormWrapper,
  Span,
} from "./style";

const RegisterForm = () => {
  return (
    <>
      <RegisterFormWrapper>
        <RegisterFormContainer>
          <RegisterFormTitle>Create account</RegisterFormTitle>
          <Formik
            initialValues={{ email: "", password: "", name: "" }}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <LoginInputsWrapper>
                  <InputField placeholder="Name" type="text" name="name" />
                  {errors.name && touched.name && (
                    <small className="danger">{errors.name}</small>
                  )}
                  <InputField placeholder="Email" type="email" name="email" />
                  {errors.email && touched.email && (
                    <small className="danger">{errors.email}</small>
                  )}
                  <InputField
                    placeholder="Password"
                    type="password"
                    name="password"
                  />
                  {errors.password && touched.password && (
                    <small className="danger">{errors.password}</small>
                  )}
                  <Button type="submit" title="Create account" />
                  <AccountSignUpWrapper>
                    <Span>Already have an account?</Span>
                    <Link to={PATH.LOGIN}>Log in</Link>
                  </AccountSignUpWrapper>
                </LoginInputsWrapper>
              </form>
            )}
          </Formik>
        </RegisterFormContainer>
      </RegisterFormWrapper>
    </>
  );
};

export default RegisterForm;
