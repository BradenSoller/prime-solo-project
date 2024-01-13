import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <div className='AboutIMG'>
          {/* <img height={700} width={900} src="About.jpg" /> */}
        </div>
        {/* <div className='AboutTitle'> */}
          <h2> Technologies Used: </h2>
        </div>
        {/* <div className='AboutText'> */}
          <ul>
        <li>REACT</li>
        <br />
        <br />

        <li>Redux</li>
        <br />
        <br />

        <li>Node</li>
        <br />
        <br />

        <li>Bootstrap</li>
        <br />
        <br />

        <li>MUI</li>
        <br />
        <br />

        <li>
Express
        </li>


      </ul>
      <br />
      <br />
      <br />
      <h2>Toughest Challenge</h2>
      <ul>
      <li>toughest challenge for me was figurng out the edit forms as it is some of the more new information we have learned recently so it definently took some time and trouble shooting to get everything to work how I wanted it too</li>
      </ul>
      <br />
      <br />

      <br />
      <h2>Future Plans</h2>
      <ul>
        <li>Send automative Emails when users register an account and or create appointments user will also receive emails when appointments have been confirmed and completed. The completed appointments emails will have an email sent to them where you can rate how you think we did !  </li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className='ThankYou'>
        <h1>THANK YOU !!!</h1>
        <p>I'd first like to thank my friends and  family for being so flexible with there time and allowing me to really focus on this program and get my work done.
        I'd also like to thank the amazing moonstone cohort for being so helpful and fun to be around  and i would really like to thank the instructors especially Matt for being so caring and helpful, I couldnt ask for a better community to be around. </p>
    </div>
        </div>
      // </div>
    // </div>
  );
}

export default AboutPage;
