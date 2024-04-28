import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'

import styles from './BounceArrow.module.css';

function BounceArrow() {
  return (
    <div className={styles.downIconContainer}>
      <FontAwesomeIcon id={styles.downIcon} icon={faChevronDown} />
    </div>
  )
}

export default BounceArrow;
