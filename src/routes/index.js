import React from 'react';
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import UnauthenticatedRoutes from './UnauthenticatedRoutes';

export default function Routes({ user }) {
  return (
    <>
      {user?.isAdmin && <AdminRoutes user={user} />}
      <UnauthenticatedRoutes user={user} />
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = {
  user: null,
};
