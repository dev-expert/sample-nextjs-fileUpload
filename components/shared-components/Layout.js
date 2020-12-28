import React from 'react';
import Head from 'next/head';
import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>Sample Project</title>
    </Head>
    <Header></Header>
    <main>
      <div >
        {children}
      </div>
    </main>
    <Footer></Footer>
  </div>
);

export default Layout;