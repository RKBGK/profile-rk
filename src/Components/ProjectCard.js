import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteProject } from '../api/data/projectData';

export default function ProjectCard({ card, setCards }) {
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
          {/* <h5 className="card-fav">{card.favorite.toString()}</h5> */}
          {/* <p className="card-text">{card.imageUrl}</p> */}
          <p className="card-text">{card.description}</p>
          <Link to={`/edit/${card.firebaseKey}`} className="btn btn-warning">
            Edit
          </Link>
          <button
            onClick={() => handleClick('delete')}
            className="btn btn-danger"
            type="button"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
  setCards: PropTypes.func.isRequired,
};
