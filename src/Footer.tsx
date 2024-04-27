import React from 'react';

import './Footer.css';

import NavLink from './NavLink';

function Footer() {
  return (
    <footer>
      <h2>get in touch</h2>
      <div className="footerDivider"></div>
      <ul className="inlineSocials">
          <li>
              <i className="fa fa-solid fa-envelope inlineIcon"></i>
              <NavLink href='mailto:meganemcclure@gmail.com' text='email me' invertColors={true}/>
          </li>
          <li>
              <i className="fa fa-brands fa-linkedin inlineIcon"></i>
              <NavLink href='https://www.linkedin.com/in/megan-mcclure-2216391a3/' text='message me on linkedin' invertColors={true}/>
          </li>
      </ul>
    </footer>
  );
}

export default Footer;
