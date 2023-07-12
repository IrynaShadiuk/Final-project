import { ReactNode } from 'react';
import Header from './Header/Header';
import AdminPage from '../admin/Admin';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      {/* <AdminPage /> */}
      <Footer />
    </div>
  );
}

export default Layout;