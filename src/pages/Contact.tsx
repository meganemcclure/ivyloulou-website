import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import wipImg from './../images/work-in-progress.png';

export default function Contact() {
    return <>
      <Nav />
      <Hero img={wipImg} header='WIP' body='This page is a work in progress... please check back later.' />
      <Footer />
    </>
}