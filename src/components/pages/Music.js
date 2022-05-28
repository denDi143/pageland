import React from 'react';
import '../../App.css';


import './Music.css';

function Music() {
  return (
    <div className='Music'>
      <video src='/videos/Music.mp4' autoPlay loop  />
      <h1>MUSIC</h1>
      <p></p>
     
    </div>
  );
}

export default Music;