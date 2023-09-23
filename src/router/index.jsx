import { useRoutes } from "react-router-dom";
import { PATH } from "../constants";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "./../pages/AboutPage/AboutPage";
import LoginPage from "./../pages/LoginPage/LoginPage";
import NotFoundPage from "./../pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./../pages/RegisterPage/RegisterPage";

const Router = () => {
  const routes = useRoutes([
    { path: PATH.INDEX, element: <HomePage /> },
    { path: PATH.HOME, element: <HomePage /> },
    { path: PATH.ABOUT, element: <AboutPage /> },
    { path: PATH.LOGIN, element: <LoginPage /> },
    { path: PATH.REGISTER, element: <RegisterPage /> },
    { path: PATH.ABOUT, element: <AboutPage /> },
    { path: PATH.NOTFOUND, element: <NotFoundPage /> },
  ]);
  return <>{routes}</>;
};

export default Router;
