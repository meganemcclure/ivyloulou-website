import NavLink from './NavLink';

import styles from './DevLink.module.css';


function DevLink() {
    return (
        <div>
            <div className={styles.devDetails}>
                <NavLink href='https://github.com/meganemcclure' text='Check out my development work on github!' condensed={true}/>
                <i id={styles.githubIconBody} className="fa fa-brands fa-github"></i>
            </div>
        </div>
    )
}

export default DevLink;