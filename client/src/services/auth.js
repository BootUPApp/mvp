import axios from 'axios';

const signupRecruiter = (
    imgPath,
      username,
      password)  => {
  return axios.post('/api/auth/recruiter/signup', {
    imgPath,
      username,
      password
  }).then(response => {
    return response.data
  }).catch(error => {
    return error
  })
}



const signupGraduate = (username, password)  => {
  return axios.post("/api/auth/graduate/signup", {
      username, password
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
