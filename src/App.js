import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OrderStatus from './components/pages/OrderStatus';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/orderStatus' component={OrderStatus} />
      </Switch>
    </Router>
  );
}

export default App;
