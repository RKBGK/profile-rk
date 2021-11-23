import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import {
  createTechnology,
  getTechnology,
  updateTechnology,
} from '../api/data/techdata';

const uploadFile = (file, locationPath = '/') => new Promise((resolve, reject) => {
  const storageRef = firebase.storage().ref();
  const uploadTask = storageRef.child(`${locationPath}`).put(file);
  uploadTask.on('state_changed', {
    error: reject,
    complete: () => {
      uploadTask.snapshot.ref.getDownloadURL().then(resolve);
    },
  });
});

const initialState = {
  name: '',
  imageUrl: '',
};

export default function ImageForm() {
  const [allImages, setAllImages] = useState([]);
  const [imageState, setImageState] = useState(null);
  const [formInput, setFormInput] = useState({});
  const updateImages = () => {
    getTechnology().then((images) => {
      setAllImages(images);
    });
  };

  useEffect(() => {
    updateImages();
  }, []);
  const firebaseKey = '';
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleImage = (e) => setImageState(e.target.files[0]);
  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firebaseKey) {
      updateTechnology(formInput).then(() => {
        resetForm();
      });
    } else {
      uploadFile(imageState, `/images/${new Date().getTime()}`).then(
        (imageUrl) => {
          createTechnology({
            ...formInput,
            imageUrl,
          })
            .then(() => {
              updateImages(allImages);
            })
            .then(() => {
              resetForm();
            });
        },
      );
    }
  };

  return (
    <div>
      <img
        className="create-post-image"
        src={
          imageState
            ? URL.createObjectURL(imageState)
            : formInput.photoUrl
              || 'https://www.pacifictrellisfruit.com/wp-content/uploads/2016/04/default-placeholder-300x300.png'
        }
        onChange={handleImage}
        alt="new"
      />
      <div className="d-flex flex-column justify-content-center">
        <input
          onChange={handleImage}
          type="file"
          value={formInput.ImageUrl}
          accept="image/*"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="m-3">
          <label htmlFor="name" className="form-label visually-hidden">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="m-3">
          <button type="submit" className="btn btn-success">
            Submit
            {/* {firebaseKey ? 'Update' : 'Submit'} */}
          </button>
        </div>
      </form>
    </div>
  );
}
