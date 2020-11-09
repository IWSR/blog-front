import React from 'react';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';

function App({ children }:PropsChildren ) {
  return (
    <React.Fragment>
      <Header />
      {
        children
      }
      <Footer />
    </React.Fragment>
  );
}

interface PropsChildren {
  children: React.ReactNode
}

export default App;
