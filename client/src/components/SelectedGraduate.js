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
    <div>
      <Radar data={{ 
        labels: skillDataKeys,
        datasets: [{
        data: skillDataValues,
        backgroundColor:['rgb(53,252,182)'],
        borderColor: ['rgb(53,252,182)'],
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
        },
       
   }}
   legend ={{
     display:false
   }}
     />
    </div>
  )
}




/* Sample Chart
const BarChart = () => {
  return (
    <div className="BarChart">
      <Pie
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}
*/



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
            <div className='selectImage' style={{backgroundImage: `url("${graduate.imageUrl}")`}}>
            </div>
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
         {RadarChart()}
        {showGraduate}
        <div className="calendar">
        
      </div>
        
      </div>
    )
}