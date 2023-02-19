import React, { Component } from "react";
import logo_ufinity from "../images/logo-ufinity.png";
import logo_kpmg_dv from "../images/logo-kpmgdv.png";
import logo_ncs from "../images/logo-ncs.svg";
import profilepic_jin from "../images/profilepic-jin.jpg";
import "./Hero.css";

class Hero extends Component {
	render() {
		return (
			<section className="hero">
				<div className="container container--horizontally-spaced personal">
					<h1 className="hero__title header">
						{/* I’m Jin, a <a className="inverse" href="https://www.mindtheproduct.com/2011/10/what-exactly-is-a-product-manager/" target="_blank">product manager</a>, <a className="inverse" href="https://uxplanet.org/ux-engineers-what-we-are-2b0c4d10b3a6" target="_blank">UX engineer</a> and <a className="inverse" href="https://github.com/jinnotgin" target="_blank">developer</a> who leverages on technology to unlock efficiencies within everyday processes. */}
						I’m Jin, a{" "}
						<a
							className="inverse"
							/* href="https://www.agileconnection.com/article/modern-role-agile-business-analyst" */
							href="https://agility.im/frequent-agile-question/what-is-an-agile-business-analyst/"
							target="_blank"
						>
							product business analyst
						</a>{" "}
						and a{" "}
						<a
							className="inverse"
							href="https://github.com/jinnotgin"
							target="_blank"
						>
							full stack developer
						</a>{" "}
						{/* who leverages on technology to unlock efficiencies in everyday
						processes. */}
						who leverages on technology to unlock innovation in everyday
						processes.
					</h1>
					<div className="hero__headshot">
						<img className="hero__headshot-image" src={profilepic_jin} />
					</div>
				</div>

				<div className="container container--wrap">
					<div className="hero__employer">
						<h3 className="employer__label">Currently:</h3>
						<a href="https://www.ufinity.com/" target="_blank">
							<img
								className="employer__logo decolourize-logo"
								src={logo_ufinity}
							/>
						</a>
					</div>
					<div className="hero__employer">
						<h3 className="employer__label">Previously:</h3>
						<a
							href="https://home.kpmg/sg/en/home/campaigns/2019/09/digital-village.html"
							target="_blank"
						>
							<img className="employer__logo kpmgdv-logo" src={logo_kpmg_dv} />
						</a>
						<a href="https://www.ncs.com.sg/" target="_blank">
							<img
								className="employer__logo decolourize-logo last"
								src={logo_ncs}
							/>
						</a>
					</div>
				</div>
			</section>
		);
	}
}

export default Hero;
