import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import heroImg from './../images/IMG_0099 (5).jpg';

export default function About() {
    return <>
      <Nav />
      <Hero img={heroImg} header='About Me' body='Hi there! I’m Megan, a full-stack developer with a strong affinity for frontend development and a budding passion for UI/UX design. When I’m not coding or designing, you’ll find me spinning my own yarn and knitting.' />
      <Footer />
    </>
}