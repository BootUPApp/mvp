/*

import { React, useState } from 'react';
import { Link } from 'react-router-dom';


// import axios from 'axios';

const Capitalise = (str) =>{
  return str.charAt(0).toUpperCase() + str.slice(1);
  }

export default function Home() {
  
  return (
    <div className='Home'>
      <h1>bootUP!</h1>
      <h2>Hello</h2>
      <p>Filter through thousands of fresh bootcamp graduates and find your super perfect candidate that you can proudly show at your next company's xmas party...</p>
      <Link to={'/recruiter'}>Recruiter entrance</Link>
      <br />
      <Link to={'/graduate'}>Graduate entrance</Link>
      <Link to={'/testComponent'}>Test Component</Link>



      <div className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content"></div>
            <div className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Of diease caused</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behavior</div>
                </div>
              </h1>
              <p>
                aajdlkwjalkdjawiodjlakndlalhdljwaldjalkwdjlakjdklakjdw
              </p>
              <div className="btw-row"></div>
              <button className="explore-button">
                  explore
              </button>
              <div className="arrow-icon">
                <img src={arrow} />
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>




  )
}
*/


import React, {useEffect, useRef} from "react";
import "../Home.scss";
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import { Link } from 'react-router-dom';

import imgGirl from "../images/alex.jpg";
import imgBoy from "../images/josh.jpg";
import arrow from '../images/arrow-right-red.svg'

function Home() {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8});
  
  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]
    const boyImage = images.lastElementChild;
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    //Images Animation
    tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut},'Start')
    .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(boyImage, 1.4, {y: 1280, ease: Power3.easeOut}, .2)
    .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

  }, [tl])



  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Deine Muddas</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">favorite bootcamp</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Graduates.</div>
                </div>
              </h1>
              <p>
              Filter through thousands of fresh bootcamp graduates and find your super perfect candidate that you can produly show o! at your next company’s xmas party.
              </p>
              <div className="btn-row">
              <button className="explore-button hvr-grow"> Recruiter
          <div className="arrow-icon">
          <Link to={'/recruiter'}><img src={arrow} alt="row"/></Link>
                  </div>

                </button>
                <button className="explore-button hvr-grow">Graduates
                  <div className="arrow-icon">
          <Link to={'/graduate'}><img src={arrow} alt="row"/></Link>
                  </div>

                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => images = el}  className="hero-images-inner">
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


