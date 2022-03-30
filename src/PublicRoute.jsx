import Layout from "./components/layouts/Layout";

const PublicRoute = ({ component: Component }) => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default PublicRoute;
