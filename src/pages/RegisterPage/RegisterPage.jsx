import register from "../../assets/images/register.png";
import LeftSide from "../../components/LeftSide/LeftSide";
import RegisterForm from "./../../components/RegisterForm/RegisterForm";
import { RegisterPageWrapper } from "./style";
const RegisterPage = () => {
  return (
    <RegisterPageWrapper>
      <RegisterForm />
      <LeftSide img={register} />
    </RegisterPageWrapper>
  );
};

export default RegisterPage;
