import React from 'react';
import { GlobalTheme } from '../../themes/';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../../organismes/Navbar';
import Footer from '../../organismes/Footer/';
import HomePage from '../HomePage/';
import Services from '../Services/';
import Products from '../Products/';
import SignUp from '../SignUp/';
import { ScrollToTop } from '../../functions';



function App() {
  return (
    <Router>
      <GlobalTheme />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
