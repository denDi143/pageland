import React from 'react';
import '../App.css';
import { Button } from './Buttons';



import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/vvid1.mp4' autoPlay loop muted />
      <h1>SIMP COMMUNITY</h1>
      <p>By: John Denver Delfin</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Sign Up <i className="fa-solid fa-user-plus"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;