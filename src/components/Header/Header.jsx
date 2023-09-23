import { Link } from "react-router-dom";
import { PATH } from "./../../constants/index";
import { HeaderLink, HeaderWrapper } from "./style";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLink>
        <Link to={PATH.HOME}>Home</Link>
      </HeaderLink>
      <HeaderLink>
        <Link to={PATH.ABOUT}>About</Link>
      </HeaderLink>
      <HeaderLink>
        <Link to={PATH.LOGIN}>Login</Link>
      </HeaderLink>
      <HeaderLink>
        <Link to={PATH.REGISTER}>Register</Link>
      </HeaderLink>
    </HeaderWrapper>
  );
};

export default Header;
