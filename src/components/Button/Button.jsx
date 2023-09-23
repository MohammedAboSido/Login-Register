import { ButtonWrapper } from "./style";

const Button = ({ title, type }) => {
  return <ButtonWrapper type={type}>{title}</ButtonWrapper>;
};

export default Button;
