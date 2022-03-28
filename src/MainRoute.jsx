import { Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";

const MainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};

export default MainRoute;
