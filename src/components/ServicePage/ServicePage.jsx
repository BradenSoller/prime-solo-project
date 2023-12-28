import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import './service.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function ServicePage() {
const history = useHistory()

  const sliderImages = [
    { url: "before-multch.jpg" },
    { url: "AFTER-ADD-MULTCH.jpg" }
  ]
  const goToAppointments = () => {
   history.push(`./schedule`)
 }
  return (

    <div className="container">
      <h3>
        Mulching
      </h3>
      <p>
        text tet
        text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet text tet
      </p>

      <div className='imageSlider'>
      <SimpleImageSlider
        width={400}
        height={300}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
        />
      </div>
      <button className='ScheduleService' onClick={goToAppointments}>schedule now</button>
    </div>
  );
}

export default ServicePage;
