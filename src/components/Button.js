import React from 'react'
import './Button.css'

export default function Button({ icon, text, link }) {
    return (
        <a href={link} className='button'>
            {icon}
            <p>{text}</p>
        </a>
    )
}