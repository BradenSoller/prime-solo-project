import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import './Home.css';
import SimpleImageSlider from 'react-simple-image-slider';
import { useDispatch } from 'react-redux';




function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
const dispatch = useDispatch()
  useEffect(() => {
getServices()


  }, []);

  
  const getServices = () => {
    dispatch({ type: "SAGA/GET_SERVICES" });
  };
  const user = useSelector((store) => store.user);
  return (
    <div>
    <div className="container">
        <h2>Young Buck Landscaping</h2>
        <div>
          
        </div>
      <p>texttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
      </div>
      <div className='homeImageOne'>
        <img height={300} src="/rock-home-page.jpg" />
      </div>
      <div className='homeImageTwo'>
        <img height={300} src="/deck-home-page.jpg" />

      </div>
      <div className='services'>
       <h2>Services !</h2>
        <p>Rock removal <br /> <br />Deck staining <br /> <br /> Weeding <br /> <br /> Tree Trimming <br /> <br />Brush/junk removal</p>
        
      </div>
    </div>
 
   
        
    
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
