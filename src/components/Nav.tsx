import React from 'react';

import './Nav.css';

import NavLink from './NavLink';

function Nav() {
  return (
    <>
      <nav className="classicNav">
          <ul className="tabNav">
              <li><NavLink href='/home' text='Home' condensed={false}/></li>
              <li><NavLink href='/work' text='My Work' condensed={false}/></li>
              <li><NavLink href='/about' text='About Me' condensed={false}/></li>
              <li><NavLink href='/contact' text='Contact' condensed={false}/></li>
              <li><NavLink href='/docs/Megan McClure Resume.pdf' text='Resume' condensed={false}/></li>
          </ul>
          <ul className="inlineSocials">
              <li>
                  <i className="fa fa-brands fa-github inlineIcon"></i>
                  <NavLink href='https://github.com/meganemcclure' text='GitHub' condensed={false}/>
              </li>
              <li>
                  <i className="fa fa-brands fa-linkedin inlineIcon"></i>
                  <NavLink href='https://www.linkedin.com/in/megan-mcclure-2216391a3/' text='LinkedIn' condensed={false} />
              </li>
          </ul>
      </nav>

      <nav className="condensedNav">
          <button className="condensedMenuButton"><i className="condensedMenuIcon fa fa-solid fa-bars"></i></button>
          <div className="condensedNavContents">
              <div>
                  <ul>
                    <li><NavLink href='/home' text='Home' condensed={true}/></li>
                    <li><NavLink href='/work' text='My Work' condensed={true}/></li>
                    <li><NavLink href='/about' text='About Me' condensed={true}/></li>
                    <li><NavLink href='/contact' text='Contact' condensed={true}/></li>
                    <li><NavLink href='./docs/Megan McClure Resume.pdf' text='Resume' condensed={true}/></li>
                  </ul>
                  <span className="navDivider"></span>
                  <ul>
                      <li><NavLink href='https://github.com/meganemcclure' text='GitHub' condensed={true}/></li>
                      <li><NavLink href='https://www.linkedin.com/in/megan-mcclure-2216391a3/' text='LinkedIn' condensed={true}/></li>
                  </ul>
              </div>
          </div>
      </nav>
    </>
  );
}

export default Nav;
