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
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

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
			<img src={lace} className="lace-overlay" />
		</div>
		<div className="hero-container homepage-text">
			<h1 className="hero-text">Welcome</h1>
			<div className="homepage-nav-buttons">
				<a
					href="/ivyloulou-website/Megan McClure Resume.pdf"
					target="_blank"
					className="homepage-text homepage-link"
				>
					resume
				</a>
				{/* <p>●</p>
				<a href="/knitting" className="homepage-text homepage-link">
					knitting
				</a>
				<p>●</p>
				<a href="about" className="homepage-text homepage-link">
					about
				</a> */}
			</div>
		</div>
		<div className="nav-container">
			<div className="nav-icons">
				<a
					href="https://www.instagram.com/ivyloulou.knits/"
					target="_blank"
					className="homepage-text homepage-link"
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a
					href="https://github.com/meganemcclure"
					target="_blank"
					className="homepage-text homepage-link"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					href="https://www.linkedin.com/in/megan-mcclure-2216391a3/"
					target="_blank"
					className="homepage-text homepage-link"
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a
					href="mailto:meganemcclure@gmail.com"
					target="_blank"
					className="homepage-text homepage-link"
				>
					<FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>
			<p className="homepage-text barcode-text">Megan McClure</p>
		</div>
	</React.StrictMode>,
);
