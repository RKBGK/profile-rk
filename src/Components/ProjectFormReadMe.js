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
        <Row className="mb-3 d-flex" width="75%">
          <Form.Group>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              id="name"
              name="name"
              type="text"
              placeholder="Enter Project Name"
              onChange={handleChange}
              value={formInput.name}
              style={{ width: '75%' }}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3 d-flex" width="75%">
          <Form.Group>
            <Form.Label htmlFor="imageURL">ImageURL</Form.Label>
            <Form.Control
              id="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="Enter Project URL"
              onChange={handleChange}
              value={formInput.imageUrl}
              style={{ width: '75%' }}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3 d-flex" width="75%">
          <Form.Group>
            <Form.Label htmlFor="description">Description</Form.Label>
            <Form.Control
              id="description"
              name="description"
              type="text"
              placeholder="Enter project Description"
              onChange={handleChange}
              value={formInput.description}
              style={{ width: '75%' }}
            />
          </Form.Group>
        </Row>
        <div className="mb-3 d-flex">
          <button className="btn btn-success" type="submit">
            {projectObj?.firebaseKey ? 'Update' : 'Submit'}
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
