import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const createTechnology = (object) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/technologies.json`, object)
    .then((response) => {
      axios
        .patch(`${baseURL}/technologies/${response.data.name}.json`, {
          firebaseKey: response.data.name,
        })
        .then(resolve);
    })
    .catch(reject);
});

const getTechnology = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/technologies.json`)
    .then((response) => resolve(Object.values(response.data || {})))
    .catch((error) => reject(error));
});

const updateTechnology = (projObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/technologies/${projObj.firebaseKey}.json`, projObj)
    .then(() => getTechnology().then(resolve))
    .catch(reject);
});

export { createTechnology, getTechnology, updateTechnology };
