import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signOutUser, signInUser } from '../api/auth';

export default function Navigation({ user }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Link className="navbar-brand" to="/aboutme">
            About Me
          </Link>
          <Link className="navbar-brand" to="/contact">
            Contact Me
          </Link>
          <Link className="navbar-brand" to="/projects">
            Projects
          </Link>
          <Link className="navbar-brand" to="/technologies">
            Technologies
          </Link>
          {user?.isadmin ? (
            <Link className="navbar-brand" to="/create">
              {' '}
              New Project Form{' '}
            </Link>
          ) : (
            ''
          )}
          {user?.uid ? (
            <button type="button" className="nav-link" onClick={signOutUser}>
              {user.fullName} Logout
            </button>
          ) : (
            <button type="button" className="nav-link" onClick={signInUser}>
              LogIn
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    uid: PropTypes.string,
    isadmin: PropTypes.bool,
  }),
};

Navigation.defaultProps = {
  user: {},
};
