import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Moment from 'react-moment';
import { Radar, defaults } from 'react-chartjs-2'
import axios from 'axios';
import GitHubCalendar from 'github-calendar'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

export default function SelectedGraduate (props) {

axios.get(`https://api.github.com/repos/NocturnalFuture/Soccer_Test/stats/contributors`).then((response)=> {
      console.log(response);
})

//console.log( props.location.state.graduate)

    const paramsId = props.match.params.id
    // console.log('Hey I am the ID', paramsId)
    const selectedGraduate = props.location.state.graduate;
    // console.log('All graduates:', selectedGraduate)

const getSelectedGraduate =  props.location.state.graduate.filter(elGraduate => {
        return elGraduate._id === paramsId
})

const skillDataArryfied = getSelectedGraduate.map((elGraduate) => {
    return elGraduate.InputList
});

const skillDataObjectArray = skillDataArryfied[0]
const skillDataKeys = skillDataObjectArray.map((skillnames) => {
        return skillnames.skill
}) // Array

const skillDataValues = skillDataObjectArray.map((skillnames) => {
  return skillnames.rating
}).map((stringNumber) => {
  return parseInt(stringNumber); 
}) // Array // Careful this turns strings into Array and will be obsolte when numbers are being put in

console.log(skillDataKeys)
console.log('Careful this turns strings into numbers and will be obsolte when numbers are being put in', skillDataValues);


/*
new Chart(myChartRef, {
  type: 'radar',
  data: {
    labels: skillDataKeys,
    datasets: [{
        data: skillDataValues
    }]
},
});
*/
console.log(getSelectedGraduate);


/*
  drawContributions(canvasEl, {
    data: contributionData,
    username: "myusername",
    themeName: "standard",
    footerText: "Made by @sallar - github-contributions.now.sh"
  });
*/


const RadarChart = () => {
  return (
    <div className="RadarChart">
    <h1 style={{paddingLeft:`50px`}}>Skills</h1>
      <Radar data={{ 
        labels: skillDataKeys,
        datasets: [{
        data: skillDataValues,
        backgroundColor:['rgb(237, 28, 36)'],
        borderColor: ['rgb(237, 28, 36)'],
        pointBackgroundColor: false
    }]
   }}
   options = {{
    scale: {
            ticks: {
                suggestedMin: 0,
                suggestedMax: 10,
                display: false
            },

            gridLines: {
            color: '#F6F9FF'
            },
            pointLabels:{
              fontColor:'black',
              fontSize: 20
            }
        },
        legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'red'
            }
        }
   }}
   legend ={{
     display:false
   }}
     />
    </div>
  )
}

const showImage = selectedGraduate.map((elGraduate) => {
  if(elGraduate._id === paramsId){
      return(
        <div className='selectImage' style={{backgroundImage: `url("${elGraduate.imageUrl}")`}}></div>
      )
  }
})

const showFirstLastName =  selectedGraduate.map((elGraduate) => {
  if(elGraduate._id === paramsId){
      return(
        <div className='nameDetails'>
          <h1>{elGraduate.firstName} <br/> {elGraduate.lastName}</h1>
          <h2>"{elGraduate.catchphrase} Battle Cry Hard Coded"</h2>
        </div>
      )
  }
})



const showIndusty = selectedGraduate.map((elGraduate) => {
  if(elGraduate._id === paramsId){
      return(
        <div className="showIndusty">

        <div>
                <h1>Industry</h1>
                <h2>{elGraduate.yearsInIndustry} Years experience in {elGraduate.industry}</h2>
        </div>
        <div>
              <h1>Languages</h1>
              <h2>        
              {elGraduate.languagesSpoken}
              </h2>
              </div>

              <div>
                <h1>Currently Learning</h1>
                <h2>{elGraduate.currentlyLearning}</h2>
        </div>
        <div>
              <h1>Me as a gif</h1>
             <img src="https://media.giphy.com/media/Q61LJj43H48z1FIK4X/giphy.gif"/>
              </div>

          

        </div>
        
      )
  }
})

const madonna = selectedGraduate.map((elGraduate) => {
  if(elGraduate._id === paramsId){
      return(
        <div className="madonna">

        <div>
                <h1>Industry</h1>
                <h2>{elGraduate.yearsInIndustry} Years experience in {elGraduate.industry}</h2>
        </div>
        <div>
              <h1>Languages</h1>
              <h2>        
              {elGraduate.languagesSpoken}
              </h2>
              </div>

              <div>
                <h1>Currently Learning</h1>
                <h2>{elGraduate.currentlyLearning}</h2>
        </div>
        <div>
              <h1>Me as a gif</h1>
             <img src="https://media.giphy.com/media/Q61LJj43H48z1FIK4X/giphy.gif"/>
              </div>

          

        </div>
        
      )
  }
})



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
      const showSkills = graduate.InputList.map((skill) => {
        return(
          skill.skill
        )
      })

      
      if(graduate._id === paramsId){
        return(
          <div key={graduate._id}>
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
      {showImage}
      {showFirstLastName}
         {RadarChart()}
         {showIndusty}
         <h1 style={{marginLeft: `80px`}}>My GitHub</h1>
         <div className="gitHubPlaceHolderImage"></div>
         {madonna}
        
      </div>
    )
}

//{showGraduate}