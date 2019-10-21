import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ItemPage from './components/ItemPage';
import ListPage from './components/ListPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/list" component={ListPage} />
        <Route path="/item" component={ItemPage} />
      </Switch>
    </div>
  );
}

export default App;
