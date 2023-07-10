import { ReactNode } from 'react';
import Header from './Header/Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;