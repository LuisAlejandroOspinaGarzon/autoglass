import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home.js';
import Services from './Components/pages/Services.js';
import Info from './Components/pages/Info.js';
import Contact from './Components/pages/Contact.js';

function App() {
  return (
      <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component= {Home} />
                    <Route path='/services' component= {Services} />
                    <Route path='/info' component= {Info} />
                    <Route path='/contact' component= {Contact} />
                </Switch>
            </Router>
      </div>
  );
}

export default App;
