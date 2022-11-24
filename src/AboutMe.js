import React from 'react'
import './AboutMe.css'
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

export default function AboutMe() {
    return(
        <div class='card'>
            <img src={require('./media/profile_picture.jpg')} />
            <h1>Hello, World!</h1>
            <p>
                Hello, I'm Megan! 
                <br /><br />
                I graduated from Computing at Queen's University in 2021, and am currently working as a 
                Fullstack Software Developer at <a href='https://monogramcc.com/'>Monogram Creative Console</a>. 
                <br /><br />
                In my free time I enjoy knitting and playing video games.
            </p>

            <h2>Contact Me</h2>
            <ul>
                <li>
                    <a href='mailto:meganemcclure@gmail.com'>
                        <FaEnvelope />
                        <p>meganemcclure@gmail.com</p>
                    </a>
                </li>
            </ul>

            <h2>Find me elsewhere on the internet</h2>
            <ul class='links-box'>
                <li>
                    <a href='https://www.linkedin.com/in/megan-mcclure-2216391a3/'>
                        <FaLinkedin />
                        <p>Linkedin</p>
                    </a>
                </li>
                <li>
                    <a href='https://github.com/meganemcclure'>
                        <FaGithub class='icon'/>
                        <p>GitHub</p>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/ivyloulou.knits/'>
                        <FaInstagram class='icon'/>
                        <p>Knitting</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}