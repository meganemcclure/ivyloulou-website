import Nav from '../components/Nav';
import Hero from '../components/Hero';
import BounceArrow from '../components/BounceArrow';
import DevLink from '../components/DevLink';
import Footer from '../components/Footer';

import HeroImg from '../images/IMG_0099 (5).jpg';

export default function Home() {
    return <>
      <Nav />
      <Hero 
        img={HeroImg} 
        header={'Hello, World!'}
        body={'I’m Megan, a fullstack software developer and UI/UX designer with a passion for making things (apps, yarn, and anything in between).\n\nMy skills include software development, user experience design, and user interface design.'}
      />
      <BounceArrow />
      <div className="contentSection">
        <DevLink />
      </div>
      <Footer />
    </>
}