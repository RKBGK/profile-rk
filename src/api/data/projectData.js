import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;
const getProjects = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});
const deleteProject = (projFbkey) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/projects/${projFbkey.firebaseKey}.json`)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

const updateProject = (projObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/projects/${projObj.firebaseKey}.json`, projObj)
    .then(() => getProjects().then(resolve))
    .catch(reject);
});

const getProjectFB = (projFbkey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/projects/${projFbkey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createProject = (object) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/projects.json`, object)
    .then((response) => {
      axios
        .patch(`${baseURL}/projects/${response.data.name}.json`, {
          firebaseKey: response.data.name,
        })
        .then(() => getProjects(object.uid).then(resolve));
    })
    .catch(reject);
});

export {
  getProjectFB,
  updateProject,
  deleteProject,
  getProjects,
  createProject,
};
