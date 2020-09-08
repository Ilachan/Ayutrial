import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import About from './pages/AboutUs/About';
import Blogs from './pages/Blogs/Blogs';
import ClinicalTrials from './pages/ClinicalTrials/ClinicalTrials';
import SignIn from './pages/SignIn/SignIn';
import { Navbar,Footer } from './components';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/AboutUs" exact component={About} />
        <Route path="/Blogs" exact component={Blogs} />
        <Route path="/ClinicalTrials" exact component={ClinicalTrials} />
        <Route path="/SignIn" exact component={SignIn} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;