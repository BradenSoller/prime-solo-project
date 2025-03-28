import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import './service.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is




function ServicePage() {

  const [service, setService] = useState();

  <select className="servicesForm" value={service} required onChange={(e) => setService(e.target.value)}>
    <option value={0}>select</option>
    <option value={1}>Rock Removal</option>
    <option value={2}>Deck Staining</option>
    <option value={3}>Weeding</option>
    <option value={4}>Tree/Bush Triming </option>
    <option value={5}>Brush/Junk Removal</option>
    <option value={6}>Mulching</option>
    <option value={7}>Snow Removal</option>

  </select>

      const dispatch = useDispatch();

  const getServices = () => {
    dispatch({ type: "SAGA/GET_SERVICES" });
  };


  const history = useHistory()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    getServices()

  }, []);

  const MulchImages = [
    { url: "before-multch.jpg" },
    { url: "AFTER-ADD-MULTCH.jpg" }
  ]

  const TrimmingImages = [
    {url: 'before-trimming.jpg'} ,
    {url: 'After-trimming.jpg'}

  ]

  const WeedingImages = [
    { url: 'before-weeding.png' },
    { url: 'after-weeding.png' }

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
    setService(3)
console.log(setService);

    
  }
  
  return (
<div>
      <div className='MulchCard'>
        <div className='MulchHeader'>
        <h3>
        Mulching
          </h3>
        </div>
      <div className="MulchText">
      <p>
       
          Elevate the health and beauty of your garden with our premium mulching services. Imbue your landscape with a protective layer that conserves moisture, suppresses weeds, and enhances soil fertility. Our expert team ensures precise and aesthetically pleasing mulch application, fostering optimal conditions for plant growth. Embrace the transformative power of mulching for a vibrant and sustainable garden that stands out in both beauty and vitality.
      </p>
        </div>
      </div>
      
      <div className='DeckCard'>
        <div className='DeckHeader'>
        <h3>Deck Staining</h3>
        </div>
        <div className='DeckText'>
        <p>
          Elevate your outdoor space with our deck staining services. We go beyond aesthetics, starting with thorough cleaning, sanding, and even power washing if needed. Our expert team guides you in selecting the ideal stain, offering customization options for colors and finishes. With meticulous application techniques, we ensure a flawless finish that enhances your deck's beauty and longevity. Our weather-resistant stains provide protection from UV rays and the elements. Trust us for expertise, quality materials, and a customer-centric approach. Transform your deck into a durable and visually stunning outdoor oasis. Contact us for a consultation and experience the difference of our comprehensive deck staining services.</p>

        </div>
      </div>
     <div className='RockCard'>
        <div className='RockHeader'>
          <h3>Rock Removal</h3>
        </div>
      <div className='RockText'>
        <p> Efficiently transform your outdoor space by availing our landscape rocks removal service. Say goodbye to cumbersome rocks cluttering your lawn, and embrace a cleaner, more aesthetically pleasing environment. Our experienced team ensures a swift and hassle-free removal process, leaving your landscape ready for your envisioned transformation.</p>

        </div>
      </div>
      <div className='BrushCard'>
        <div className='BrushHeader'>
        
          <h3>Brush/Junk Removal</h3>
        </div>
      <div className='BrushText'>
        <p>Effortlessly reclaim your space with our top-notch Brush and Junk Removal services. Our dedicated team specializes in efficient and thorough removal of brush, debris, and unwanted items, leaving your property clutter-free. Whether you're tackling post-landscaping cleanup, decluttering your home, or clearing construction waste, our professionals ensure a hassle-free experience.

</p>

        </div>
      </div>

      <div className='TrimmingCard'>
        <div className='TrimmingHeader'>
          <h3>Tree/Bush Trimming</h3>
        </div>
        <div className='TrimmingText'>
        <p>Elevate the beauty of your outdoor space with our expert bush and tree trimming services. Our skilled arborists provide precise trimming, ensuring a meticulously shaped and healthy landscape. From seasonal maintenance to customized solutions, we tailor our services to meet your unique needs. Our commitment extends to safety, cleanliness, and promoting plant vitality. Experience the benefits of enhanced curb appeal, improved plant health, increased property value, and the expertise of our professional team. Transform your outdoor haven with our comprehensive trimming services—contact us today for a beautifully manicured landscape.</p>

        </div>
      </div>
      <div className='WeedingCard'>
        <div className='WeedingHeader'>
          <h3>Weeding</h3>
        </div>
      <div className='WeedingText'>
        <p>Revitalize your garden with our meticulous weeding services. Bid farewell to unwanted invaders that compromise your green haven's beauty. Our skilled team meticulously removes weeds, restoring the charm of your garden while promoting a healthier growth environment for your cherished plants. Rediscover the joy of a pristine and well-maintained landscape with our expert weeding solutions.</p>

        </div>
      </div>

      <div className='MulchSlider'>
      <SimpleImageSlider
        width={500}
        height={400}
          images={MulchImages}
          showBullets={true}
          showNavs={true}
          navMargin={440}
          navStyle={2}
        />
      </div>
      <Button variant='contained' color="warning" className='ScheduleService' onClick={goToAppointments}>schedule now</Button>
      <div className='DeckSlider'> 
        <SimpleImageSlider
          width={500}
          height={400}
          images={DeckImages}
          showBullets={true}
          showNavs={true}
          navMargin={440}
          navStyle={2}
        />
        
      </div>
      <Button variant='contained' color="warning" className='DeckButton' onClick={goToAppointments}>schedule now</Button>

      <div className='RockSlider'>
        <SimpleImageSlider
          width={500}
          height={400}
          showNavs={true}
          images={RockImages}
          showBullets={true}
          navMargin={440}
          navStyle={2}
          
          
          
       
      
        />

      </div>
      <Button variant='contained' color="warning" className='RockButton' onClick={goToAppointments}>schedule now</Button>

      <br />
      <br />
      <div className='BrushSlider'>
        <SimpleImageSlider
          width={500}
          height={400}
          images={BrushImages}
          showBullets={true}
          showNavs={true}
          navMargin={440}
          navStyle={2}
        />

      </div>
      <Button variant='contained' color="warning" className='BrushButton' onClick={goToAppointments}>schedule now</Button>

      <br />
      <br />
      <div className='TrimmingSlider'>
        <SimpleImageSlider
          width={500}
          height={400}
          images={TrimmingImages}
          showNavs={true}
          showBullets={true}
          navMargin={440}
          navStyle={2}
        />

      </div>
      <Button variant='contained' color="warning" className='TrimmingButton' onClick={goToAppointments}>schedule now</Button>

      <br />
      <br />
      <div className='WeedingSlider'>
        <SimpleImageSlider
          width={500}
          height={400}
          images={WeedingImages}
          showBullets={true}
          showNavs={true}
          navMargin={440}
          navStyle={2}
        />

      </div>
      <Button variant='contained' color="warning" className='WeedingButton' onClick={goToAppointments}>schedule now</Button>
      </div>
   

      
  );
}

export default ServicePage;
