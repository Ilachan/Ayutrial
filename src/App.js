import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Diseases from './pages/Diseases/Diseases';
import Blogs from './pages/Blogs/Blogs';
import ClinicalTrials from './pages/ClinicalTrials/ClinicalTrials';
import Form from './pages/SignIn/Form';
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
        <Route path="/Diseases" exact component={Diseases} />
        <Route path="/Blogs" exact component={Blogs} />
        <Route path="/ClinicalTrials" exact component={ClinicalTrials} />
        <Route path="/SignIn" exact component={Form} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;