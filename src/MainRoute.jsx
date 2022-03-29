import { Route } from "react-router-dom";
import Layout from "./Components/layouts/Layout";

const MainRoute = ({ element: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};

export default MainRoute;
