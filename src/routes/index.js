import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutMe from '../views/AboutMe';
import ContactMe from '../views/ContactMe';
import Projects from '../views/Projects';
import Technologies from '../views/Technologies';
import Home from '../views/Home';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/contact" component={ContactMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/technologies" component={Technologies} />
      </Switch>
    </div>
  );
}
