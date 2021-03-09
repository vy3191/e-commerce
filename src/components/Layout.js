import React from 'react';
import  Header from './Header';
import Footer from './Footer';
import Checkout from './Checkout';

function BaseLayout({children}) {
  return (
    <div>
      <Header />
      {/* <Checkout /> */}
        <div className="main-content">
           { children }
        </div>
      <Footer />
    </div>
  )
}

export default BaseLayout
