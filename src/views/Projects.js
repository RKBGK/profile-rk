import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProjects } from '../api/data/projectData';
import ProjectCard from '../Components/ProjectCard';

export default function Projects({ user }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getProjects().then((cardsArray) => {
      if (isMounted) setCards(cardsArray);
    });
    return () => {
      isMounted = false;
    }; // cleanup function
  }, []);
  return (
    <>
      <h1 className="text-center">Hi its about Projects</h1>
      <h1 className="text-center">{user.isadmin}</h1>
      <div className="d-flex flex-wrap">
        {cards.map((card) => (
          <ProjectCard
            key={card.firebaseKey}
            card={card}
            setCards={setCards}
            user={user}
          />
        ))}
      </div>
    </>
  );
}

Projects.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    uid: PropTypes.string,
    isadmin: PropTypes.bool,
  }),
};

Projects.defaultProps = {
  user: {},
};
