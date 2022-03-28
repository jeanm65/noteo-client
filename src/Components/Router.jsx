import { Route } from "react-router";
import Main from "./containers/Main";

const Layout = () => {
  return (
    <Route {...rest}>
      <Main>
        <Component />
      </Main>
    </Route>
  );
};

export default Layout;
