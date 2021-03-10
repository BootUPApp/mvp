import axios from 'axios';
import { relativeTimeRounding } from 'moment';

const signupRecruiter = (
      firstname,
      lastname,
      companyname,
      imageUrl,
      username,
      password,)  => {
  return axios.post('/api/auth/recruiter/signup', {
      firstname,
      lastname,
      companyname,
      imageUrl,
      username,
      password,
  }).then(response => {
    return response.data
  }).catch(error => {
    return error
  })
}



const signupGraduate = (
  username,
  password,
  firstName,
  lastName,
  imageUrl,
  catchphrase,
  emailAddress,
  bootCampName,
  bootCampCity,
  bootCampGraduation,
  skill,
  rating,
  industry,
  yearsInIndustry,
  languagesSpoken,
  currentlyLearning,
  myGif,
  githubUsername,
  githubProfile,
  linkedInProfile,
  mediumProfile,
  githubId,
  companyName,
  InputList)  => {
  console.log(`sending ${username} to the database` )
  return axios.post("/api/auth/graduate/signup", {
    username,
    password,
    firstName,
    lastName,
    imageUrl,
    catchphrase,
    emailAddress,
    bootCampName,
    bootCampCity,
    bootCampGraduation,
    skill,
    rating,
    industry,
    yearsInIndustry,
    languagesSpoken,
    currentlyLearning,
    myGif,
    githubUsername,
    githubProfile,
    linkedInProfile,
    mediumProfile,
    githubId,
    companyName,
    InputList
  }).then(response => {
    return response.data
  }).catch(error => {
    return error.response.data
  })
}

const loginRecruiter = (username, password)  => {
  return axios.post("/api/auth/recruiter/login", {
      username, password
  }).then(response => {
    return response.data
  }).catch(error => {
    return error.response.data
  })
}

const loginGraduate = (username, password)  => {
  return axios.post("/api/auth/graduate/login", {
      username, password
  }).then(response => {
    return response.data
  }).catch(error => {
    return error.response.data
  })
}


const logout = () => {
  return axios
  .delete("/api/auth/logout")
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return error.response.data
  })
}

// const deleteUser = (props) => {
//   const id = this.props.match.params.id
//   axios.delete(`/api/auth/user/${id}`)
//     .then(() => {
//       // we want to redirect to the home page
//       this.props.history.push('/')
//     })
//     .catch(err => {
//       console.log(err)
//     })
//     // .then(() => {
//     //   window.location.reload()
//     // })
// }

export {signupRecruiter,signupGraduate,loginRecruiter,loginGraduate,logout}
