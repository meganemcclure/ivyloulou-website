import React from 'react';

import './NavLink.css';

interface NavLinkProps {
    href: string,
    text: string,
    condensed?: boolean
    invertColors?: boolean
}

function NavLink({href, text, condensed = false, invertColors = false}: NavLinkProps) {

  return (
    condensed ?
      <a className={'pageLink'.concat(invertColors ? ' offWhite' : ' darkGrey')} href={href}><h3>{text}</h3></a> :
      <a className={'pageLink'.concat(invertColors ? ' offWhite' : ' darkGrey')} href={href}><h5>{text}</h5></a>
  );
}

export default NavLink;
