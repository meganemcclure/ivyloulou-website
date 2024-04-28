import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'

import './BounceArrow.css';


function BounceArrow() {
  return (
    <div className="downIconContainer">
      <FontAwesomeIcon id='downIcon' icon={faChevronDown} />
    </div>
  )
}

export default BounceArrow;
