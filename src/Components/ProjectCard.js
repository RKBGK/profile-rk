import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteProject } from '../api/data/projectData';

export default function ProjectCard({ card, setCards, user }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProject(card).then(setCards);
    }
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: '3px' }}>
        <div className="card-body">
          <h5 className="card-title">{card.name}</h5>
          <p className="card-text">{card.description}</p>
          <h5> {user?.uid ? user.fullName : 'no'}</h5>
          {user?.uid ? (
            <button type="button" className="nav-link">
              {user.fullName}
            </button>
          ) : (
            ''
          )}
          {user?.uid ? (
            <Link to={`/edit/${card.firebaseKey}`} className="btn btn-warning">
              Edit
            </Link>
          ) : (
            ''
          )}
          {user?.uid ? (
            <button
              onClick={() => handleClick('delete')}
              className="btn btn-danger"
              type="button"
            >
              DELETE
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    uid: PropTypes.string,
    isAdmin: PropTypes.bool,
  }),
  card: PropTypes.shape(PropTypes.obj).isRequired,
  setCards: PropTypes.func.isRequired,
};

ProjectCard.defaultProps = {
  user: {},
};
