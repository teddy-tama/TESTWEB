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
function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/productsandservices" component={ProductServicePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
