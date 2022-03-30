import Footer from './Footer';
import Menu from './Menu';

const Layout = ({ children }) =>
 <div>
      {/* ---------- header menu  ---------- */}
      <Menu />
      {/* ---- main content of the page  --- */}
      <main>
        {children}
      </main>
      {/* ---------- page footer  ---------- */}
      <Footer />
    </div>;

export default Layout;
