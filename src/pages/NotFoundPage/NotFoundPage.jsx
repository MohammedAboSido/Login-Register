import { Link } from "react-router-dom";
import { PATH } from "../../constants";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page Not Found 404</h1>
      <Link to={PATH.HOME}>Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
