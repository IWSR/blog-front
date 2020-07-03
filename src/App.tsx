import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import Index from '@/pages/index';
import Detail from '@/pages/detail/detail';
import './App.less';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/detail' exact component={Detail} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
