import './DevLink.css';

import NavLink from './NavLink';

function DevLink() {
    return (
        <div>
            <div className="devDetails">
                <NavLink href='https://github.com/meganemcclure' text='Check out my development work on github!' condensed={true}/>
                <i id="githubIconBody" className="fa fa-brands fa-github"></i>
            </div>
        </div>
    )
}

export default DevLink;