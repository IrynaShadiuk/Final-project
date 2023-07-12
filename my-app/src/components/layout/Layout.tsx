import { ReactNode } from 'react';
import Header from './Header/Header';
import AdminPage from '../admin/Admin';
import Footer from './Footer/Footer';
import Home from '../home/Home';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Home />
      {/* <AdminPage /> */}
      <Footer />
    </div>
  );
}

export default Layout;