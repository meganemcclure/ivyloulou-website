import Nav from '../components/Nav';
import DevLink from '../components/DevLink';
import PreviewCard from '../components/PreviewCard';
import Footer from '../components/Footer';

import BuddySystem from '../images/BuddySystemMockup.jpg';
import RFECY from '../images/RFECYMockup.jpg';
import CanadaPost from '../images/CanadaPostWebsiteMockup.jpg';

export default function Work() {
    return <>
      <Nav />
      <div className="contentSection">
        <h2>Design Work</h2>
        <PreviewCard 
            img={BuddySystem}
            title='BuddySystem Application Design Case Study'
            description='BuddySystem is a unique platform that strives to create a welcoming environment for everyone. With an "all-inclusive" approach, the platform is designed to facilitate authentic friendships and vibrant communities through engaging events and shared interests.'
            link='/work/buddySystemCaseStudy'
            linkText='Check out the case study'
        />
        <PreviewCard 
            img={RFECY}
            title='Resources for Exceptional Children and Youth Website Redesign'
            description='Resources for Exceptional Children and Youth (RFECY) is a non-profit organization in Durham region that provides resources and support for children with disabilities and their families. This project focuses on redesigning the RFECY website to improve user experience and make it easier for family and guardiens to find the tools and resources they need.'
            link='/work/rfecyCaseStudy'
            linkText='Check out the case study'
        />
        <PreviewCard 
            img={CanadaPost}
            title='Canada Post Website Navigation Redesign'
            description='Canada Post serves millions of Canadians every day by providing mail and parcel delivery, but their website navigation is lacking and confusing for many. This project focuses on redesigning the Canada Post website navigation to improve user experience and make it easier for Canadians to navigate between pages on the Canada Post website.'
            link='/work/canadaPostCaseStudy'
            linkText='Check out the case study'
        />
        <DevLink />
      </div>
      <Footer />
    </>
}