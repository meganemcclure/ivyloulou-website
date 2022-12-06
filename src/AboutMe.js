import React from 'react'
import './AboutMe.css'
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import Button from './components/Button'

export default function AboutMe() {
    return(
        <div className='card'>
            <div className='about-section'>
                <img src={require('./media/profile_picture.jpg')} />
                <h1>Hello, World!</h1>
                <p>
                    Hello, I'm Megan! 
                    <br /><br />
                    I graduated from Computing at Queen's University in 2021, and I am currently working as a 
                    Fullstack Software Developer at <a href='https://monogramcc.com/'>Monogram Creative Console</a>. 
                    <br /><br />
                    In my free time I enjoy knitting and playing video games.
                </p>
            </div>
            <div className='divider'/>
            <div className='about-section' id='contact-section'>
                <h2>Contact Me</h2>
                <ul>
                    <li>
                        <Button link='mailto:meganemcclure@gmail.com' icon={<FaEnvelope />} text='meganemcclure@gmail.com' />
                    </li>
                </ul>

                <h2>Find me elsewhere on the internet</h2>
                <ul className='links-box'>
                    <li>
                        <Button link='https://www.linkedin.com/in/megan-mcclure-2216391a3/' icon={<FaLinkedin />} text='Linkedin'/>
                    </li>
                    <li>
                        <Button link='https://github.com/meganemcclure' icon={<FaGithub className='icon'/>} text='GitHub'/>
                    </li>
                    <li>
                        <Button link='https://www.instagram.com/ivyloulou.knits/' icon={<FaInstagram className='icon'/>} text='Knitting' />
                    </li>
                </ul>
            </div>
        </div>
    )
}