import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Header from '@/components/Header/header';
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
    </Router>
  );
}

export default App;
