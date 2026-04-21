import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import forestImage from "./images/alexandra-6HE9J1q1FUk-unsplash.jpg";
import lace from "./images/Transparent_Lace_PNG_Clip_Art_Image.png";
import {
	faInstagram,
	faGithub,
	faLinkedin,
	faGit,
} from "@fortawesome/free-brands-svg-icons";

import { HashRouter, Routes, Route } from "react-router-dom";
import {
	About,
	Home,
	Work,
	BuddySystemCaseStudy,
	CanadaPostCaseStudy,
	RFECYCaseStudy,
	Error,
} from "./pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

root.render(
	<React.StrictMode>
		{/* <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/work' element={<Work />} />
            <Route path='/work/buddySystemCaseStudy' element={<BuddySystemCaseStudy />} />
            <Route path='/work/rfecyCaseStudy' element={<RFECYCaseStudy />} />
            <Route path='/work/canadaPostCaseStudy' element={<CanadaPostCaseStudy />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </HashRouter> */}
		<div className="hero-container">
			<img src={forestImage} className="hero-image" />
			{/* <img src={lace} className="lace-overlay" /> */}
		</div>
		<div className="nav-container">
			<div className="nav-icons">
				<a href="" className="homepage-text">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a href="" className="homepage-text">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="" className="homepage-text">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</div>
			<p className="homepage-text barcode-text">Megan McClure</p>
		</div>
		<div className="hero-container homepage-text">
			<h1 className="hero-text">Welcome</h1>
			<div className="homepage-nav-buttons">
				<a href="/resume" className="homepage-text">
					resume
				</a>
				<p>●</p>
				<a href="/knitting" className="homepage-text">
					knitting
				</a>
				<p>●</p>
				<a href="about" className="homepage-text">
					about
				</a>
			</div>
		</div>
	</React.StrictMode>,
);
