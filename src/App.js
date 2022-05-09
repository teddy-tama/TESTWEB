import logo from './logo.svg';
import React, {useEffect, useState}from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useHistory
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductServicePage from './pages/ProductsAndServices/ProductServicePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/productsandservices" component={ProductServicePage}/>
          <Route exact path="/AboutUs" component={AboutUs}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
