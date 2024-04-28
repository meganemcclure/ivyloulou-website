import styles from './NavLink.module.css';

interface NavLinkProps {
    href: string,
    text: string,
    condensed?: boolean
    invertColors?: boolean
}

function NavLink({href, text, condensed = false, invertColors = false}: NavLinkProps) {
  return (
    condensed ?
      <a className={`${styles.pageLink} ${invertColors ? styles.offWhite: ''}`} href={href}><h3>{text}</h3></a> :
      <a className={`${styles.pageLink} ${invertColors ? styles.offWhite: ''}`} href={href}><h5>{text}</h5></a>
  );
}

export default NavLink;
