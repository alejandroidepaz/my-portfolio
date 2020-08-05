import React from 'react';
import '../styling/App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Navigator  from "./Navigation";
import Home from "./Home";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";

// Handles page switches by rendering appropriate component
const Router = () =>{

  return (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/projects" component={Projects}></Route>
    <Route exact path="/blog" component={Blog}></Route>
    <Route exact path="/contact" component={Contact}></Route>
  </Switch>
  )
}

function App() {
  return (
    <div className="App">
      <Navigator />
      <Router />
    </div>
  );
}

export default App;