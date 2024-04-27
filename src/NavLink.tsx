import React from 'react';

import './NavLink.css';

interface NavLinkProps {
    href: string,
    text: string,
    condensed: boolean
}

function NavLink({href, text, condensed}: NavLinkProps) {

  return (
    condensed ?
      <li><a className="pageLink" href={href}><h3>{text}</h3></a></li> :
      <li><a className="pageLink" href={href}><h5>{text}</h5></a></li>
  );
}

export default NavLink;
