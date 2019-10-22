import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import ItemPage from './components/ItemPage/ItemPage';
import ListPage from './components/ListPage/ListPage';
import PathViewer from './components/PathViewer/PathViewer';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/list" component={ListPage} />
        <Route path="/item" component={ItemPage} />
      </Switch>

      <PathViewer />
    </div>
  );
}

export default App;
