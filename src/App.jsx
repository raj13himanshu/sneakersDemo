import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import "./App.css";
import { Switch, Route} from "react-router-dom";

import Collections from "./pages/Collections";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Error from "./pages/Error";





const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/collections" component={Collections}></Route>
        <Route path="/men" component={Men}></Route>
        <Route path="/women" component={Women}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
