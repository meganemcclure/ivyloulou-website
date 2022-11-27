import React from 'react'

export default function PhotoCard({ image }) {
    let containerStyle = {
        padding: '10px',
        display: 'flex',
        flexDirection: 'row'
    }

    let imageStyle = {
        height: '100px',
        width: '100px',
        borderRadius: '150px',
        objectFit: 'cover',
    }

    let cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '10px',
        padding: '10px 20px',
        marginLeft: '-35px',
        marginTop: '50px'
    }

    return (
        <div style={containerStyle}>
            <img src={image} style={imageStyle} />
            <div style={cardStyle}>
                <p>Hello My name is Megan! <br /><br />I've been working as a Fullstack Software Developer at Monogram Creative Console for a bit over a year.</p>
            </div>
        </div>
    )
}