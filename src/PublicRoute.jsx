import Layout from './components/layouts/Layout';

const PublicRoute = ({ component: Component }) => <Layout>
      <Component />
    </Layout>;

export default PublicRoute;
