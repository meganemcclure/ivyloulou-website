import React from 'react';

import './Nav.css';

import NavLink from './NavLink';

function Nav() {
  return (
    <>
      <nav className="classicNav">
          <ul className="tabNav">
              <NavLink href='./index.html' text='Home' condensed={false}/>
              <NavLink href='./work.html' text='My Work' condensed={false}/>
              <NavLink href='./about.html' text='About Me' condensed={false}/>
              <NavLink href='./contact.html' text='Contact' condensed={false}/>
              <NavLink href='./docs/Megan McClure Resume.pdf' text='Resume' condensed={false}/>
          </ul>
          <ul className="inlineSocials">
              <li>
                  <i className="fa fa-brands fa-github inlineIcon"></i>
                  <a className="pageLink" href="https://github.com/meganemcclure"><h5>GitHub</h5></a>
              </li>
              <li>
                  <i className="fa fa-brands fa-linkedin inlineIcon"></i>
                  <a className="pageLink" href="https://www.linkedin.com/in/megan-mcclure-2216391a3/"><h5>LinkedIn</h5></a>
              </li>
          </ul>
      </nav>

      <nav className="condensedNav">
          <button className="condensedMenuButton"><i className="condensedMenuIcon fa fa-solid fa-bars"></i></button>
          <div className="condensedNavContents">
              <div>
                  <ul>
                    <NavLink href='./index.html' text='Home' condensed={true}/>
                    <NavLink href='./work.html' text='My Work' condensed={true}/>
                    <NavLink href='./about.html' text='About Me' condensed={true}/>
                    <NavLink href='./contact.html' text='Contact' condensed={true}/>
                    <NavLink href='./docs/Megan McClure Resume.pdf' text='Resume' condensed={true}/>
                  </ul>
                  <span className="navDivider"></span>
                  <ul>
                      <NavLink href='https://github.com/meganemcclure' text='GitHub' condensed={true}/>
                      <NavLink href='https://www.linkedin.com/in/megan-mcclure-2216391a3/' text='LinkedIn' condensed={true}/>
                  </ul>
              </div>
          </div>
      </nav>
    </>
  );
}

export default Nav;
