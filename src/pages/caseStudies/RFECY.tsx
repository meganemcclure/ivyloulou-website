import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Footer from '../../components/Footer';

import wipImg from '../../images/work-in-progress.png';

function RFECYCaseStudy() {
    return <>
      <Nav />
      <Hero img={wipImg} header='WIP' body='This page is a work in progress... please check back later.' />
      <Footer />
    </>
}

export default RFECYCaseStudy;