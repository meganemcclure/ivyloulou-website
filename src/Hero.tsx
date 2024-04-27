import React from 'react';

import './Hero.css';

interface HeroProps {
  img: string, 
  header: string,
  body: string
}

function Hero({img, header, body}: HeroProps) {
  return (
    <div className='hero'>
      <img src={img} />
      <span>
        <h1>{header}</h1>
        <div className='divider' />
        <p>{body}</p>
      </span>
    </div>
  );
}

export default Hero;
