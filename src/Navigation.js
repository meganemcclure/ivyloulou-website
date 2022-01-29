import React from 'react';
import instagram from './media/instagram.png'

export function Navigation() {
    return (
        <div>
            <Tab image={require("./media/instagram.png")} link="https://www.instagram.com/ivyloulou.knits/" title="instagram icons" description="Instagram icons created by riajulislam - Flaticon"/>
            <Tab link="https://github.com/meganemcclure" title="" description=""/>
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
function Tab(props) {
    return (
        <div class="NavIcon">
            <img src={props.image} alt={props.title}>
                {props.description}
                <a href={props.link} alt={props.title}/>
            </img>
        </div>
    )
}