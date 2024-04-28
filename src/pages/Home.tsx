import Nav from '../components/Nav';
import Hero from '../components/Hero';
import BounceArrow from '../components/BounceArrow';
import DevLink from '../components/DevLink';
import Footer from '../components/Footer';

import HeroImg from '../images/IMG_0099 (5).jpg';
import BuddySystem from '../images/BuddySystemMockup.jpg';
import PreviewCard from '../components/PreviewCard';

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
        <h2>Check out my design work!</h2>
        <PreviewCard 
            img={BuddySystem}
            title='BuddySystem Application Design Case Study'
            description='BuddySystem is a unique platform that strives to create a welcoming environment for everyone. With an "all-inclusive" approach, the platform is designed to facilitate authentic friendships and vibrant communities through engaging events and shared interests.'
            link='/work/buddySystemCaseStudy'
            linkText='Check out the case study'
        />
        <DevLink />
      </div>
      <Footer />
    </>
}