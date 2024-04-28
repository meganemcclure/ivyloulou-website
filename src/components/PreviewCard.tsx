import './PreviewCard.css';

import NavLink from './NavLink';

interface PreviewCardProps {
    img: string, 
    title: string,
    description: string,
    link: string,
    linkText: string
}

function PreviewCard({img, title, description, link, linkText}: PreviewCardProps) {
    return (
        <div className="previewCardSection">
            <img src={img} />
            <span>
                <h4>{title}</h4>
                <div className="divider"></div>
                <p>{description}</p>
                <NavLink href={link} text={linkText} />
            </span>
        </div>
    )
}

export default PreviewCard;