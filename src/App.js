import React from 'react';
import { HashRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import ImgLink from './components/ImageLink';
import Footer from './components/Footer';

export default function BasicExample() {
  return (
    <HashRouter basename='/'>
      <div>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bio">
            <BioPage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}


function Home() {
  return (
    <div>
      <Bio />
    </div>
  );
}

function BioPage() {
  return (
    <div>
      <Bio />
    </div>
  );
}

function PortfolioPage() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <ContactForm />
      <ImgLink />
    </div>
  );
}
