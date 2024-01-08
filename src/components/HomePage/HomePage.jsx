import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import './Home.css';
import SimpleImageSlider from 'react-simple-image-slider';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
const dispatch = useDispatch()
  useEffect(() => {
getServices()


  }, []);

  const history = useHistory()

  const handleHomeSchedule = () => {
history.push('/schedule')
  }

  const handleHomeService = () => {
    history.push('/services')
  }

  
  const getServices = () => {
    dispatch({ type: "SAGA/GET_SERVICES" });
  };
  const user = useSelector((store) => store.user);

  const theme = createTheme({
    palette: {
      background: {
        paper: '#dcdcdc ', // your color
      },
    },
  });

  return (
    <div>
      <div className="container">
        <div className='h2'>
        <h2>Young Buck Landscaping</h2>
          <div>
          </div>
          
        </div>
        <div className='homePageText'>
        <p>texttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
        </div>
      </div>
      
      <div>
        <Button className="homeSchedule" variant ="contained" onClick={handleHomeSchedule} color="warning" >Schedule Now</Button>
      </div>
      
      <div className='homeImageOne'>
        <img height={400} src="/rock-home-page.jpg" />
      </div>
      <div className='homeImageTwo'>
        <img height={400} src="/deck-home-page.jpg" />

      </div>
      <div className='services'>

       <h2>Services !</h2>
        <p>Rock removal <br /> <br />Deck staining <br /> <br /> Weeding <br /> <br /> Tree Trimming <br /> <br />Brush/junk removal</p>
        
      </div>

    <div className='learnMore'>
        <Button color="warning" className='learnMore' ><b>LEARN MORE ...</b></Button>
      </div>
    </div>
 
   
        
    
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
