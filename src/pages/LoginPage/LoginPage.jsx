import login from "../../assets/images/login.png";
import LeftSide from "../../components/LeftSide/LeftSide";
import LoginForm from "../../components/LoginForm";
import { LoginPageWrapper } from "./style";
const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LoginForm />
      <LeftSide img={login} />
    </LoginPageWrapper>
  );
};

export default LoginPage;
