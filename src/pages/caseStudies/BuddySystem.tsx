import Nav from "../../components/Nav";
import Footer from '../../components/Footer';

import styles from './CaseStudy.module.css';

import BuddySystemMockup from '../../images/BuddySystemMockup.jpg';
import DesignProcess from '../../images/buddySystem/Double Diamond Design Process.jpg';
import CaseStudy from '../../images/buddySystem/BuddySystem Case Study.jpg';
import Lofi1 from '../../images/buddySystem/Lo-Fi 1.jpg';
import Lofi2 from '../../images/buddySystem/Lo-Fi 2.jpg';
import Lofi3 from '../../images/buddySystem/Lo-Fi 3.jpg';
import Lofi4 from '../../images/buddySystem/Lo-Fi 4.png';
import Lofi5 from '../../images/buddySystem/Lo-Fi 5.png';
import Lofi6 from '../../images/buddySystem/Lo-Fi 6.png';
import Hifi1 from '../../images/buddySystem/Hi-Fi 1.jpg';
import Hifi2 from '../../images/buddySystem/Hi-Fi 2.jpg';

function BuddySystemCaseStudy() {
    return <>
        <Nav />
        <div className={styles.jumbotron}>
            <h1>UX Case Study: BuddySystem</h1>
            <h4>Make friends, build squads, buddy up!</h4>
            <img src={BuddySystemMockup} />
        </div>

        <div className="container">        
            <div className={styles.primarySection}>
                <div className={styles.secondarySection}>
                    <h3>The Problem</h3>
                    <p>
                        In today's digital age, the market for social apps is oversaturated with an abundance 
                        of platforms that encourage hookup culture and shallow connections. Unfortunately, this 
                        emphasis can impede individuals from finding authentic friendships within their 
                        respective communities, leaving them feeling disconnected and unfulfilled.
                        <br />
                        <br />
                        Millennials, who spearheaded the social media era, are increasingly reliant on online 
                        sources to meet and connect. However, this shift has also led to a rise in social anxiety 
                        and isolation, making it challenging for them to form meaningful friendships and a sense 
                        of community – especially when online engagement is often superficial.
                    </p>
                </div>

                <div className={styles.secondarySection}>
                    <h3>The Process</h3>
                    <img src={DesignProcess} className='img-fluid'/>
                </div>

                <div className={styles.secondarySection}>
                    <h3>The Solution</h3>
                    <p>
                        BuddySystem is a unique platform that strives to create a welcoming environment for 
                        everyone. With an "all-inclusive" approach, the platform is designed to facilitate 
                        authentic friendships and vibrant communities through engaging events and shared 
                        interests.
                    </p>
                </div>
            </div>

            <div className={styles.primarySection}>
                <a className="anchor" id="projectOverview"></a>
                <h2>Project Overview</h2>
                <div className="secondarySection row">
                    <div className="col-sm">
                        <h3>Roles & Responsibilities</h3>
                        <p>UX Designers:</p>
                        <ul>
                            <li>Halie Goulden</li>
                            <li>Megan McClure</li>
                            <li>Melanie Lawton</li>
                            <li>Shaneice Singh</li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <h3>Tools Used</h3>
                        <p>Communication:</p>
                        <ul>
                            <li>Slack</li>
                            <li>Zoom</li>
                        </ul>
                        <p>Organization:</p>
                        <ul>
                            <li>FigJam (Kanban Method)</li>
                        </ul>
                        <p>General:</p>
                        <ul>
                            <li>Figma</li>
                            <li>FigJam</li>
                            <li>Google Suite (Docs, Drive, Forms, Sheets)</li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <h3>Timeline</h3>
                        <p>3 weeks (April 2023)</p>
                    </div>
                </div>
            </div>

            <div className={styles.primarySection}>
                <a className="anchor" id="phaseOne"></a>
                <h2>Phase 1: User Research</h2>
                <p>
                    Our team executed a series of 5 interviews with individuals from the target 
                    demographic (i.e. millennials ages 27-42). Additionally we conducted a survey 
                    and used secondary data (i.e. via online sources) to inform our research and 
                    overall plan.
                    <br />
                    <br />
                    Based on our interviews we identified the following themes and developed a 
                    User Persona to reflect our target user
                </p>

                <div className={styles.secondarySection}>
                    <h3>Themes</h3>
                    <ol>
                        <li>
                            Millenials are lonley! “A poll of about 1,200 people by YouGov found 27% of 
                            Millennials have no close friends, and 22% report they have no friends at all. 
                            Most people find it difficult to make friends because they’re shy (53%), but 
                            people also report friendship is too much work (20%) or they are too busy 
                            (14%).” Forbes (2021)”
                        </li>
                        <li>
                            Despite the hurles that make connecting online more difficult, millennials 
                            have a strong desire to engage, but they crave social apps that simplify the 
                            process and eliminate poorly thought-out platforms and illegitimate profiles.
                        </li>
                    </ol>
                </div>

                <div className={styles.secondarySection}>
                    <h3>User Persona</h3>
                    <img src={CaseStudy} className="img-fluid" />
                </div>
            </div>

            <div className={styles.primarySection}>
                <a className="anchor" id="phaseTwo"></a>
                <h2>Phase 2: Problem Definition</h2>
                <div className={styles.secondarySection}>
                    <h3>Problem Statement</h3>
                    <p>The widespread prevalence of online engagement has contributed to the emergence of 
                        limited social interaction models, which produce unsatisfactory outcomes for users. 
                        Millennials specifically encounter challenges in forming genuine connections, leading 
                        to a pervasive sense of loneliness and dissatisfaction.
                        <br />
                        <br />
                        How might we create a safe and welcoming platform that fosters meaningful platonic 
                        relationships with a measurable positive impact on users' social well-being?
                    </p>
                </div>
            </div>

            <div className={styles.primarySection}>
                <a className="anchor" id="phaseThree"></a>
                <h2>Phase 3: Ideation</h2>
                <div className={styles.secondarySection}>
                    <h3>Ideation & Brainstorming</h3>
                    <p>
                        Building on our initial research we conducted a competitor analysis, and brainstormed 
                        using the I Like, I Wish, What If method to determine a basic feature set for our 
                        application, that would cater to our target users' needs. We setteled on the following 
                        features:
                    </p>
                    <ol>
                        <li>
                            Profile Matching based on shared interests - start users off with something they 
                            can connect over, to help them form genuine connections faster.
                        </li>
                        <li>
                            Events - allow users to add events in their area to their calendar, so they can 
                            connect with friends offline.
                        </li>
                        <li>
                            Groups - allow users to join groups that relate to their interests.
                        </li>
                    </ol>
                </div>

                <div className={styles.secondarySection}>
                    <h3>Value Proposition</h3>
                    <p>
                        Meet your new BFF: BuddySystem!
                        <br />
                        <br />
                        Whether you’re into learning how to grow basil, starting a new business, or running a 
                        5k marathon, we’ve got you. Our friends only platform makes expanding your social circle 
                        a breeze. With an easy to use experience and a welcoming community, BuddySystem helps 
                        you build meaningful platonic connections that boost your social wellbeing. Say goodbye 
                        to FOMO and hello to a fulfilling social life!
                        <br />
                        <br />
                        Make friends, build squads. Buddy up!
                    </p>
                </div>
            </div>

            <div className={styles.primarySection}>
                <a className="anchor" id="phaseFour"></a>
                <h2>Phase 4: Low Fidelity Prototyping</h2>
                <div className={styles.secondarySection}>
                    <p>
                        Time to make this application, not so theoretical with some lo-fi prototypes.
                        <br />
                        <br />
                        To begin our prototyping process we first decided on a user flow, to determine how 
                        we wanted our users to move through the BuddySystem application. Using our newly 
                        created user flow and our desired features list we created some low-fidelity wireframes.
                    </p>
                    <div className="row">
                        <img className="col-md-4" src={Lofi1} />
                        <img className="col-md-4" src={Lofi2} />
                        <img className="col-md-4" src={Lofi3} />
                    </div>
                </div>
            </div>

            <div className={styles.primarySection}>
                <a className="anchor" id="phaseFive"></a>
                <h2>Phase 5: Usability Testing & Iterations</h2>
                <p>
                    Next up we completed 2 rounds user testing an iteration on our lo-fi prototypes. Why 
                    2 rounds? we wanted to ensure the UX was nailed down before creating any Hi-Fi mockups.
                </p>

                <div className={styles.secondarySection}>
                    <h3>Key Learnings from Usability Testing</h3>


                    <div className={styles.secondarySection}>
                        <p>
                            <b>Problem:</b> The swipe behaviour for the onboarding was not clear to users. Many 
                            wanted to tap on the arrows instead of swipe, and about 50% of the users who picked 
                            up on the swipe behaviour thought the arrow was telling them to swipe in the opposite 
                            direction.
                        </p>
                        <p>
                            <b>Solution:</b> Update swipe to tap.
                        </p>
                        <div className="row">
                            <img className="col-md-4" src={Lofi4} />
                        </div>
                    </div>

                    <div className={styles.secondarySection}>
                        <p>
                            <b>Problem:</b> Difference between the recommended section vs the existing section 
                            was not clear to users. They often didn't know if the buddies, groups, and events 
                            they were seeing were new (recommended) or ones they had already connected with.
                        </p>
                        <p>
                            <b>Solution:</b> Update layout - emphasize recommended at the top.
                        </p>
                        <div className="row">
                            <img className="col-md-4" src={Lofi5} />
                        </div>
                    </div>

                    <div className={styles.secondarySection}>
                        <p>
                            <b>Problem:</b> Many users noted that starting off with an 'About Me' questionnaire 
                            made it feel like a hookup application (oops, not our intention, platonic friends 
                            only!)
                        </p>
                        <p>
                            <b>Solution:</b> lead with interests before jumping into a questionnaire.
                        </p>
                        <div className="row">
                            <img className="col-md-4" src={Lofi6} />
                        </div>
                    </div>
                </div>

                <div className={styles.secondarySection}>
                    <h3>Key Learnings from the Final Round of Usability Testing</h3>
                    <p>
                        <b>Problem:</b> The difference between the recommended section vs the existing 
                        section was still not clear to users.
                    </p>
                    <p>
                        <b>Problem:</b> Users pointed out that the transition between the onboarding 
                        and app exploration was jarring, and could use some sort of transition screen 
                        to give users some sort of direction on where to go.
                    </p>
                    <p>
                        <b>Problem:</b> Users found the copy for prompts on the onboarding pages 
                        confusing.
                    </p>
                </div>

                <div className={styles.secondarySection}>
                    <h3>Final Low Fidelity Prototype - Demo</h3>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe src="https://www.youtube.com/embed/wayMjQVI8NU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
            </div>

            <div className={styles.primarySection}>
                <a className="anchor" id="phaseSix"></a>
                <h2>Phase 6: Final Thoughts</h2>
                <div className={styles.secondarySection}>
                    <h3>Hi-Fi Mockups</h3>
                    <div className="row">
                        <img className="col-md-4" src={Hifi1} />
                        <img className="col-md-4" src={Hifi2} />
                    </div>
                </div>

                <div className={styles.secondarySection}>
                    <h3>Future Improvements</h3>
                    <p>
                        <b>Planned Improvement:</b> Further user testing and iteration to clearly differentiate between which is the recommended 
                        vs existing section
                    </p>
                    <p>
                        <b>Why:</b> users still found the difference unclear, even after the iterations we made
                    </p>
                    <br />
                    <br />
                    <p>
                        <b>Planned Improvement:</b> Define and explain the connection process further
                    </p>
                    <p>
                        <b>Why:</b> users still found concepts like the difference between 'adding' and 'saving' a buddy or concepts like 
                        'joining' a group confusing
                    </p>
                    <br />
                    <br />
                    <p>
                        <b>Planned Improvement:</b> Expand Safety Features
                    </p>
                    <p>
                        <b>Why:</b> issue brought up by users in our initial interviews, that we did not focus on during the project. It is 
                        important nonetheless.
                    </p>
                    <br />
                    <br />
                    <p>
                        <b>Planned Improvement:</b> Not all default profile fields are included in the onboarding
                    </p>
                    <p>
                        <b>Why:</b> never defined all the default profile information, so for many users signing up, some parts of their 
                        profile would not be filled in from onboarding
                    </p>
                    <br />
                    <br />
                    <p>
                        <b>Planned Improvement:</b> add a preview mode for new users
                    </p>
                    <p>
                        <b>Why:</b> this was an idea we were excited about implementing, but due to time constraints we did not get around 
                        to actually prototyping it
                    </p>
                    <br />
                    <br />
                    <p>
                        <b>Planned Improvement:</b> re-write copy for email newsletter subscriptions
                    </p>
                    <p>
                        <b>Why:</b> users were still unclear about what they were signing up for in the newsletter section
                    </p>
                    <br />
                    <br />
                    <p>
                        <b>Planned Improvement:</b> make add, save, and remove buttons more prominent
                    </p>
                    <p>
                        <b>Why:</b> many users still missed these in our second round of usability testing, and they are a main focus of 
                        the application, so we want people to see them
                    </p>
                </div>

                <div className={styles.secondarySection}>
                    <h3>Final Thoughts</h3>
                    <p>So, what did we actually learn from this project?</p>
                    <ol>
                        <li>There is a need - millennials WANT to engage, but the existing social apps are limiting.</li>
                        <li>it's important to consider the nuances that differentiate dating apps and friendship apps, as the expectations can be very different. Therefore BuddySystem should carefully consider and reflect on those differences in design.</li>
                        <li>Branding and marketing is essential in communicating the purpose of BuddySystem. Branding is an essential tool in mitigating users signing up for the wrong reasons.</li>
                        <li>Onboarding is an important tool for emphasizing the purpose and ultimately controlling the users' experience by incorporating capability features that speak to their needs, namely friendship and community building.</li>
                    </ol>
                </div>
            </div>
        </div>
      <Footer />
    </>
}

export default BuddySystemCaseStudy;