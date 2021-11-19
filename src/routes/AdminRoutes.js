import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddNewProject from '../views/AddNewProject';
import EditProject from '../views/EditProject';

export default function AdminRoutes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path="/create"
        component={() => <AddNewProject user={user} />}
      />
      <Route
        exact
        path="/edit/:firebaseKey"
        component={() => <EditProject user={user} />}
      />
    </Switch>
  );
}
AdminRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AdminRoutes.defaultProps = {
  user: null,
};
