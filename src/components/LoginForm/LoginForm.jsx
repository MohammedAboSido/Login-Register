import { Formik } from "formik";
import { Link } from "react-router-dom";
import { schema } from "../../utils/loginSchema";
import { PATH } from "./../../constants/index";
import Button from "./../Button/Button";
import {
  AccountSignUpWrapper,
  InputField,
  LoginFormContainer,
  LoginFormTitle,
  LoginFormWrapper,
  LoginInputsWrapper,
  Span,
} from "./style";

const LoginFrom = () => {
  return (
    <>
      <LoginFormWrapper>
        <LoginFormContainer>
          <LoginFormTitle>Welcome back</LoginFormTitle>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={schema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <LoginInputsWrapper>
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
                  <Button type="submit" title="Log in" />
                  <AccountSignUpWrapper>
                    <Span>Don’t have an account?</Span>
                    <Link to={PATH.REGISTER}>Sign up</Link>
                  </AccountSignUpWrapper>
                </LoginInputsWrapper>
              </form>
            )}
          </Formik>
        </LoginFormContainer>
      </LoginFormWrapper>
    </>
  );
};

export default LoginFrom;
