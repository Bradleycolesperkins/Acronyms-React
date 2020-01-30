import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './views/Home';


import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" component={Home}/>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
