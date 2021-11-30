import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Row } from 'react-bootstrap';
import { createProject, updateProject } from '../api/data/projectData';

// Create an initial state object so that it can be reused in the component
const initialState = {
  name: '',
  description: '',
  imageUrl: '',
};
export default function ProjectForm({ projectObj = {} }) {
  // set the default state to the initialState object
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();
  console.warn(projectObj);
  useEffect(() => {
    if (projectObj.firebaseKey) {
      setFormInput({
        name: projectObj.name,
        firebaseKey: projectObj.firebaseKey,
        description: projectObj.description,
        imageUrl: projectObj.imageUrl,
      });
    }
  }, [projectObj]);

  const resetForm = () => {
    setFormInput({ ...initialState });
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectObj.firebaseKey) {
      updateProject(formInput).then(() => {
        resetForm();
        history.push('/projects');
      });
    } else {
      createProject({ ...formInput }).then(() => {
        resetForm();
        history.push('/projects');
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>

        <div className="mb-3 d-flex">
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <label htmlFor="description" className="form-label visually-hidden">
              Project Description
            </label>
            <input
              className="form-control form-control-lg me-1"
              type="textarea"
              id="description"
              name="description"
              rows="4"
              value={formInput.description}
              onChange={handleChange}
              placeholder="Enter project Description!"
              required
            />
          </div>
          <div>
            <button className="btn btn-success" type="submit">
              {projectObj?.firebaseKey ? 'Update' : 'Submit'}
            </button>
          </div>
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
