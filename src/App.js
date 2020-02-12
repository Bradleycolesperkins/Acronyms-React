import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';


import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
            <Route exact path="/" component={Home}/>
            <Route path="/Register" component={Register}/>
            <Route path="/Login" component={Login}/>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
