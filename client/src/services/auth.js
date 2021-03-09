import axios from 'axios';

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




const logout = ()=> {
  return axios.delete("/api/auth/logout").then(response => {
    return response.data
  }).catch(error => {
    return error.response
  })
}


export {signupRecruiter,signupGraduate,loginRecruiter,loginGraduate,logout}
