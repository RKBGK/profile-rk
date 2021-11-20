import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AboutMe from '../views/AboutMe';
import ContactMe from '../views/ContactMe';
import Projects from '../views/Projects';
import Technologies from '../views/Technologies';
import Home from '../views/Home';
// import AddNewProject from '../views/AddNewProject';
// import EditProject from '../views/EditProject';

export default function UnauthenticatedRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/contact" component={ContactMe} />
      <Route
        exact
        path="/projects"
        component={() => <Projects user={user} />}
      />
      <Route exact path="/technologies" component={Technologies} />
    </Switch>
  );
}

UnauthenticatedRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

UnauthenticatedRoutes.defaultProps = {
  user: null,
};
