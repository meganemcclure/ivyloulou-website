import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <h2>get in touch</h2>
      <div className={styles.footerDivider}></div>
      <ul className={styles.inlineSocials}>
          <li>
              <FontAwesomeIcon className={styles.inlineIcon} icon={faEnvelope} />
              <NavLink href='mailto:meganemcclure@gmail.com' text='email me' invertColors={true}/>
          </li>
          <li>
              <FontAwesomeIcon className={styles.inlineIcon} icon={faLinkedin} />
              <NavLink href='https://www.linkedin.com/in/megan-mcclure-2216391a3/' text='message me on linkedin' invertColors={true}/>
          </li>
      </ul>
    </footer>
  );
}

export default Footer;
