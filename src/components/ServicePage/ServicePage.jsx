import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import './service.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import { Button } from '@mui/material';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function ServicePage() {
  const history = useHistory()
  

  const MulchImages = [
    { url: "before-multch.jpg" },
    { url: "AFTER-ADD-MULTCH.jpg" }
  ]

  const DeckImages = [
    {url: 'deck-before-trailer-jpg.jpg'},
    {url: 'deck-after-trailer.jpg' }
  ]

  const RockImages = [
    {url: 'side-rock-before.jpg' },
    {url: 'side-rock-after.jpg' }
  ]

  const BrushImages = [
    { url: 'brush-cleanup-before.jpg' },
    { url: 'brush-cleanup-after.jpg' }

  ]
  const goToAppointments = () => {
    history.push(`./schedule`)
    
 }
  return (
<div>
    <div className="MulchText">
      <h3>
        Mulching
      </h3>
      <p>
        text tet
        text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet
      </p>
      </div>
      <div className='DeckText'>
        <h3>Deck Staining</h3>
       <p> text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet</p>

      </div>
      <div className='RockText'>
        <h3>Rock Removal</h3>
        <p> text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet</p>

      </div>
      <div className='BrushText'>
        <h3>Brush/Junk Removal</h3>
        <p> text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet</p>

      </div>
      <div className='MulchSlider'>
      <SimpleImageSlider
        width={400}
        height={300}
        images={MulchImages}
        showBullets={true}
        showNavs={true}
        />
      </div>
      <Button variant='contained' color="warning" className='ScheduleService' onClick={goToAppointments}>schedule now</Button>
      <div className='DeckSlider'> 
        <SimpleImageSlider
          width={400}
          height={300}
          images={DeckImages}
          showBullets={true}
          showNavs={true}
        />
        
      </div>
      <Button variant='contained' color="warning" className='DeckButton' onClick={goToAppointments}>schedule now</Button>

      <div className='RockSlider'>
        <SimpleImageSlider
          width={400}
          height={300}
          images={RockImages}
          showBullets={true}
          showNavs={true}
        />

      </div>
      <Button variant='contained' color="warning" className='RockButton' onClick={goToAppointments}>schedule now</Button>


      <div className='BrushSlider'>
        <SimpleImageSlider
          width={400}
          height={300}
          images={BrushImages}
          showBullets={true}
          showNavs={true}
        />

      </div>
      <Button variant='contained' color="warning" className='BrushButton' onClick={goToAppointments}>schedule now</Button>

      </div>
   

      
  );
}

export default ServicePage;
