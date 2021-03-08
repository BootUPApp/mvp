import axios from 'axios';


const service = axios.create({
  baseURL: 'http://localhost:5005'
  // withCredentials: true // => you might need this when having the users in the app
});

const errorHandler = err => {
  // console.error(err);
  throw err;
};

const handleUpload = (theFile) => {
  // console.log('file in service: ', theFile)
  return service
    .post('/upload', theFile)
    .then(res => res.data)
    .catch(errorHandler);
}

const createEvent = (event) => {
  // console.log('new thing is: ', newThing)
  return service
    .post('/events', event)
    .then(res => res.data)
    .catch(errorHandler);
}

export default {
  service,
  handleUpload,
  createEvent
};