import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import errImg from './../images/404-icon.png';

export default function About() {
    return <>
      <Nav />
      <Hero img={errImg} header='oops!' body='Something went wrong... please refresh the page.' />
      <Footer />
    </>
}