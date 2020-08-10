import React from 'react';
import '../styling/App.css';
import {Switch, Route } from 'react-router-dom';
import Navigator  from "./Navigation";
import Home from "./Home";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import ProjectDisplay from './ProjectDisplay';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

// Handles page switches by rendering appropriate component
const Router = () =>{

  return (
  <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/projects" component={Projects}></Route>
    <Route exact path="/blog" component={Blog}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    <Route exact path="/projects/:projectName" component={ProjectDisplay}></Route>
  </Switch>
  )
}

function App() {
  return (
    <div className="App">
      <Navigator />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
