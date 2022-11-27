import React from 'react'
import './Timeline.css'
import { FaLocationArrow }  from 'react-icons/fa'

export default function Timeline(props) {
    return (
        <div class='timeline'>
            <div class='events-list'>
                <Event 
                    title='Birth' 
                    description='I was born.' 
                    location='Rochester, Minnesota' 
                    image={require('./../images/baby_megan.jpg')}
                />
                <Event 
                    title='Elementary School' 
                    description='I attended St.Pius X elementary school, between kindergarden and grade 4.' 
                    location='Rochester, Minnesota' 
                    image={require('./../images/baby_megan.jpg')}
                />
            </div>
        </div>
    )
}

function Event({title, description, location, image}) {

    return (
        <div>
            <div class='event-container'>
                <img src={image} />
                <div class='event-data'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div class='location'>
                        <FaLocationArrow />
                        <p>{location}</p>
                    </div>
                </div>
            </div>
            <div class='event-line-container'>
                <div class='event-line'/>
                <div class='event-spot' />
            </div>
        </div>
    )
}