import React from 'react';
import { GlobalTheme } from '../../themes/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../organismes/Navbar';


function App() {
  return (
    <Router>
      <GlobalTheme />
      <Navbar />
      <Switch>

      </Switch>
    </Router>
  );
}

export default App;
