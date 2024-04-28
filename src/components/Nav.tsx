import { useState } from 'react';

import NavLink from './NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from './Nav.module.css';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen((open) => !open)
    }

    return (
        <>
        <nav className={styles.classicNav}>
            <ul className={styles.tabNav}>
                <li><NavLink href='/ivyloulou-website/#/home' text='Home' condensed={false}/></li>
                <li><NavLink href='/ivyloulou-website/#/work' text='My Work' condensed={false}/></li>
                <li><NavLink href='/ivyloulou-website/#/about' text='About Me' condensed={false}/></li>
                <li><NavLink href='/ivyloulou-website/#/contact' text='Contact' condensed={false}/></li>
                <li><NavLink href='/ivyloulou-website/Megan McClure Resume.pdf' text='Resume' condensed={false}/></li>
            </ul>
            <ul className={styles.inlineSocials}>
                <li>
                    <FontAwesomeIcon className={styles.inlineIcon} icon={faGithub}/>
                    <NavLink href='https://github.com/meganemcclure' text='GitHub' condensed={false}/>
                </li>
                <li>
                <FontAwesomeIcon className={styles.inlineIcon} icon={faLinkedin}/>
                    <NavLink href='https://www.linkedin.com/in/megan-mcclure-2216391a3/' text='LinkedIn' condensed={false} />
                </li>
            </ul>
        </nav>

        <nav className={`${styles.condensedNav} ${isOpen ? styles.open : ''}`}>
            <button className={styles.condensedMenuButton} onClick={toggleMenu}><i className={`${styles.condensedMenuIcon} fa fa-solid ${isOpen ? 'fa-x' : 'fa-bars'}`}></i></button>
            <div className={`${styles.condensedNavContents} ${isOpen ? styles.open : ''}`}>
                <div>
                    <ul>
                        <li><NavLink href='/ivyloulou-website/#/home' text='Home' condensed={true}/></li>
                        <li><NavLink href='/ivyloulou-website/#/work' text='My Work' condensed={true}/></li>
                        <li><NavLink href='/ivyloulou-website/#/about' text='About Me' condensed={true}/></li>
                        <li><NavLink href='/ivyloulou-website/#/contact' text='Contact' condensed={true}/></li>
                        <li><NavLink href='/ivyloulou-website/Megan McClure Resume.pdf' text='Resume' condensed={true}/></li>
                    </ul>
                    <span className={styles.navDivider}></span>
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
