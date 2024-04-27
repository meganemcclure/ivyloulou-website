import React from 'react';

import './App.css';

import HeroImg from './images/IMG_0099 (5).jpg'
import Hero from './Hero'

function App() {
  return (
    <div>
      <Hero 
        img={HeroImg} 
        header={'Hello, World!'}
        body={'I’m Megan, a fullstack software developer and aspiring UI/UX designer with a passion for making things and solving problems.\n\nMy skills include software development, user experience design, and user interface design.'}
      />
    </div>
  );
}

export default App;
