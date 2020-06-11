import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { hot } from 'react-hot-loader/root'
import Index from '@/pages/index';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Index}></Route>
    </Router>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
