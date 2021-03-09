import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';


export default function SelectedGraduate (props) {
    const paramsId = props.match.params.id
    console.log('Hey I am the ID', paramsId)
    const selectedGraduate = props.location.state.graduate;
    console.log('All graduates:', selectedGraduate)
    const showGraduate = selectedGraduate.map((graduate) => {
      const showLearning = graduate.currentlyLearning.map((learning) => {
        return(
          learning
        )
      })
      const showLanguages = graduate.languagesSpoken.map((language) => {
        return(
          language
        )
      })
      const showSkills = graduate.skills.map((skill) => {
        return(
          skill.skill
        )
      })
      if(graduate._id === paramsId){
        return(
          <div key={graduate._id}>
            <h1>{graduate.firstName} {graduate.lastName}</h1>
            <h2>"{graduate.catchphrase}"</h2>
            <p>{graduate.bootCampName}, {graduate.bootCampCity}</p>
            <p>Graduated: <Moment format="MM/YYYY">{graduate.bootCampGraduation}</Moment></p>
            <h3>Skills:</h3>
            <p>{showSkills}</p>
            <h3>Languages:</h3>
            <p>{showLanguages}</p>
            <h3>Industry:</h3>
            <p>{graduate.yearsInIndustry} years experience in {graduate.industry}</p>
            <h3>Currently Learning:</h3>
            <p>{showLearning}</p>
            <h3>GitHub</h3>
            <p>*GitHub activity visual*</p>
            <h3>Links</h3>
            <Link to={graduate.githubProfile}>GitHub</Link><br/>
            <Link to={graduate.linkedInProfile}>LinkedIn</Link><br/>
            <Link to={graduate.mediumProfile}>Medium</Link><br/>
            <a href={"mailto:" + graduate.emailAddress}><h3>contact</h3></a>

  
  
          </div>
        )
      }
    })
    return(
      <div>
        {showGraduate}
      </div>
    )
}