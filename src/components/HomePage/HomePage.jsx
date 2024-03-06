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
import Link from '@mui/material/Link';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';





function HomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
const dispatch = useDispatch()
  useEffect(() => {
getServices()


  }, []);



  
    // const [index, setIndex] = useState(0);
  
    // const handleSelect = (selectedIndex) => {
    //   setIndex(selectedIndex);
    // };

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
      {/* <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
<div className='cardPlacement'>
      <div className="container">
        <div className='h2'>
        <h2>Young Buck Services</h2>
          <div>
          </div>
          
        </div>
        <div className='Card'>
        <div className='homePageText'>
        <p>texttexttexttexttexttexttexttexttexttexttexttextttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
        <Button className="homeSchedule" variant ="contained" onClick={handleHomeSchedule} color="warning" >Schedule Now</Button>
          </div>
        </div>
        </div>
      </div>
      
    
     
      
      
      <div className='homeImageOne'>
        <img height={400} width={550} src="/rock-home.jpg" />
      </div>
      <div className='homeImageTwo'>
        <img height={400} width={550} src="/About.jpg" />

      </div>
      <div className='services'>

       <h2>Services !</h2>
        <p>Rock removal <br /> <br />Deck staining <br /> <br /> Weeding <br /> <br /> Tree Trimming <br /> <br />Brush/junk removal</p>
        
      </div>

    <div className='learnMore'>
        <Button color="warning" className='learnMore' onClick={handleHomeService} ><b>LEARN MORE ...</b></Button>
      </div>
      <div className='contactHome'> 
        <h2>Contact us !</h2>
      </div>
      <div className='contactNumber'>
        <Link href="tel:7187374253">(718)-737-4253</Link>
      </div>
      <div className='contactEmail'>
        <Link href="mailto:youngbuckservices@gmail.com">youngbuckservices@gmail.com</Link>

      </div>
    </div>
 
   
        
    
  );
}

// this allows us to use <App /> in index.js
export default HomePage;
