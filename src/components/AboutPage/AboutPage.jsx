import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>Hello to the User's reading this!</p>

        <p>My name is Mustafe Hassan and I am the person who made the web app 
           you're currently on! This webapp uses Front-end and Back-end, for the Front-end technologies 
           I used were HTML, CSS, Javascript, React/Redux, for the Back-end Technologies I used Node.js, 
           PostgreSQL, Express.js </p>
        <p>
          The reason I built this webapp is that I am currently in the field working in healthcare, I specifically 
          work in group homes where I aid the daily life of a person I support. As someone who administers medication
          it is the upmost importance to make sure the person I support get's their medication on time. There is only
          a small margin to where they can miss their medication and thats only 30 minutes, once it's passed the 30 minute
          window the medication is not administerable anymore.This Web app can help combat any possiblity of being late for 
          either your own medication or a person you are administering medicaiton to!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
