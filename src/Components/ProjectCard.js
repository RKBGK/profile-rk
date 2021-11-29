import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { deleteProject } from '../api/data/projectData';

export default function ProjectCard({ card, setCards, user }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deleteProject(card).then(setCards);
    }
  };

  return (
    <div
      className="card container-fluid d-flex justify-content-center"
      style={{ width: '15rem', margin: '1px' }}
    >
      <Card>
        <div className="card-body text-dark">
          <div className="overflow">
            <Card.Img
              src={card.imageUrl}
              alt={card.name}
              style={{ width: '10rem', margin: '3px', padding: '2%' }}
            />
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
          </div>
          {/* <h5> {user?.uid ? user.fullName : 'no'}</h5> */}
          {/* {user?.uid ? (
            <button type="button" className="nav-link">
              {user.fullName}
            </button>
          ) : (
            ''
          )} */}
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
      </Card>
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
