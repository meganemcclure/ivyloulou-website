import Nav from '../components/Nav';
import Hero from '../components/Hero';
import BounceArrow from '../components/BounceArrow';
import Footer from '../components/Footer';

import HeroImg from '../images/IMG_0099 (5).jpg';

export default function Home() {
    return <>
      <Nav />
      <Hero 
        img={HeroImg} 
        header={'Hello, World!'}
        body={'I’m Megan, a fullstack software developer and aspiring UI/UX designer with a passion for making things and solving problems.\n\nMy skills include software development, user experience design, and user interface design.'}
      />
      <BounceArrow />
        <div className="contentSection">
            <div className="devWorkSection">
                <div className="devDetails">
                    <a className="pageLink" href="https://github.com/meganemcclure">
                        <h2>Check out my development work on github!</h2>
                    </a>
                    <i id="githubIconBody" className="fa fa-brands fa-github"></i>
                </div>
            </div>

            <h2>Check out my design work!</h2>
            <div className="caseStudySection">
                <img src="./images/BuddySystemMockup.jpg" />
                <span className="caseStudyContents">
                    <h4 className="caseStudyTitle">BuddySystem Application Design Case Study</h4>
                    <div className="dividerLine"></div>
                    <p className="caseStudyDescription">
                        BuddySystem is a unique platform that strives to create a welcoming environment for everyone. With an 
                        "all-inclusive" approach, the platform is designed to facilitate authentic friendships and vibrant 
                        communities through engaging events and shared interests.
                    </p>
                    <a className="pageLink caseStudyLink" href="./case-studies/buddySystemCaseStudy.html">
                        <h5>Check out the case study</h5>
                    </a>
                </span>
            </div>
        </div>
      <Footer />
    </>
}