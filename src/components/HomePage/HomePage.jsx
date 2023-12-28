import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import './Home.css';
import SimpleImageSlider from 'react-simple-image-slider';




function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM


  
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Young Buck Landscaping</h2>
      <p>texttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>

  

    </div>
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
