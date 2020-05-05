import React from 'react';
import Header from '../Header/header';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default Layout;
