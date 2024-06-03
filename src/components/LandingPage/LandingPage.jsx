import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome to Mustafes Medication Reminder Web App!');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h1>{heading}</h1>

      <div className="grid">
        <div className="grid-col grid-col_8">
        
        <h3>As we progress in our lives we tend to end up forgetting certain things that are important to us like our health. For 
          our health some of us do require medication to keep us running happy and healthy for either our mental or physical state. As a result we tend to forget when to take said medication as sometimes we are just too busy with either school, kids, work etc, with my Medication Reminder web  
          app, designed to simplify your daily routine and to help you to maintain your medication intake.</h3>
      
          <h2>
            To get Started :
          </h2>
           <ul>
            <li>Please create a Username & Password you can remember, There isn't any current password and username retrival system yet ! </li>
            <li>Make sure to add the correct information as it is not editable !</li>
           </ul>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
