import React from'react';
import Navbar from './components/Navbar';
import Home from  './components/pages/home';
import Products from  './components/pages/products';
import About from  './components/pages/about';
import Copyright from  './components/copyRight';
import Footer from  './components/footer';
import Cart from "./components/pages/Cart";
import LaunchShoe from "./components/pages/launchShoe";
import {TransProvider} from './components/context/Store'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

export default function App1(){
    return(
    <div style={{margin:0, padding:0 }}>
        
          <TransProvider>
            <Router>
            <Navbar />
            <Switch>
                  <Route path="/products/:slug" component={LaunchShoe} />
                  <Route path="/products" component={Products} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/about" component={About} />
                  <Route path="/" component={Home} />
                </Switch> 
                  

              </Router>
        </TransProvider>
            <Footer />
            <Copyright />

        
    </div>
    )
}