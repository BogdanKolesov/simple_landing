import React from 'react';
import { GlobalTheme } from '../../themes/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../organismes/Navbar';
import Footer from '../../organismes/Footer/';
import HomePage from '../HomePage';


function App() {
  return (
    <Router>
      <GlobalTheme />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
