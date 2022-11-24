import React from 'react';
import instagram from './media/instagram.png'

export function Navigation() {
    return (
        <div>
            <h1>Hello World!</h1>
            {/* <Tab image={require("./media/instagram.png")} link="https://www.instagram.com/ivyloulou.knits/" title="instagram icons" description="Instagram icons created by riajulislam - Flaticon"/>
            <Tab link="https://github.com/meganemcclure" title="" description=""/> */}
        </div>
    )
}

/**
 * props:
 * - image
 * - color
 * - link
 * - title
 * - description
 */
function Tab({image, color, link, title, description}) {
    return (
        <div class="NavIcon">
            <img src={image} alt={title}>
                {description}
                <a href={link} alt={title}/>
            </img>
        </div>
    )
}