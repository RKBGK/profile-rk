import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createProject, updateProject } from '../api/data/projectData';

// Create an initial state object so that it can be reused in the component
const initialState = {
  name: '',
  description: '',
  imageUrl: '',
};
export default function ProjectForm({ projectObj }) {
  // set the default state to the initialState object
  const [formInput, setFormInput] = useState(initialState);

  // when the component mounts, check if a firebasekey exists. If it does, set the value of formInput to the obj values
  useEffect(() => {
    let isMounted = true;
    if (projectObj.firebaseKey) {
      if (isMounted) {
        setFormInput({
          name: projectObj.name,
          firebaseKey: projectObj.firebaseKey,
          description: projectObj.description,
          imageUrl: projectObj.imageUrl,
        });
      }
    }
    return () => {
      isMounted = false;
    };
    // rerender the component if the obj value is different
  }, [projectObj]);

  // On call of the resetForm function, reset the state to the initialState
  const resetForm = () => {
    setFormInput({ ...initialState });
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Since we are using this form for both creating and updating, we need to use logic to determine which method to run. If there is a firebaseKey, we know that we are updating.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectObj.firebaseKey) {
      // update the todo
      updateProject(formInput).then(() => {
        resetForm();
      });
    } else {
      createProject({ ...formInput }).then(() => {
        resetForm();
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex">
          <label htmlFor="name" className="form-label visually-hidden">
            Name
          </label>
          <input
            className="form-control form-control-lg me-1"
            type="text"
            id="name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            placeholder="Enter Project Name!"
            required
          />
          <label htmlFor="imageURL" className="form-label visually-hidden">
            ImageURL
          </label>
          <input
            className="form-control form-control-lg me-1"
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formInput.imageUrl}
            onChange={handleChange}
            placeholder="Enter Image URL!"
            required
          />
          <label htmlFor="description" className="form-label visually-hidden">
            ImageURL
          </label>
          <input
            className="form-control form-control-lg me-1"
            type="text"
            id="description"
            name="description"
            value={formInput.description}
            onChange={handleChange}
            placeholder="Enter project Description!"
            required
          />
          <button className="btn btn-success" type="submit">
            {projectObj.firebaseKey ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

ProjectForm.propTypes = {
  projectObj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

ProjectForm.defaultProps = {
  projectObj: {},
};