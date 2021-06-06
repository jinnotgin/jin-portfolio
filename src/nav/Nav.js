import React, { Component } from "react";
import { Link } from "react-router-dom";
import SVGMorpheus from "svg-morpheus";
import "typeface-barlow";
/* import logo from '../logo.svg'; */
import "./Nav.css";

/* https://codepen.io/sosuke/pen/Pjoqqp */

class Nav extends Component {
	constructor(props) {
		super(props);
		this.navLogo = React.createRef();
		this.navLogo_svgMorpheus = false;

		this.navLogoTransform = this.navLogoTransform.bind(this);
		this.workClickHandler = this.workClickHandler.bind(this);
	}

	navLogoTransform = () => {
		window.setTimeout(() => {
			this.navLogo_svgMorpheus.to("text", { duration: 500 }, () => {
				this.navLogo_svgMorpheus.to("icon");
			});
		}, 100);
	};

	workClickHandler = (e) => {
		e.preventDefault();

		const { history, scrollToFunction } = this.props;

		const keyword = "/project";
		const pathname = history.location.pathname;
		const isProject = pathname.includes(keyword);

		if (isProject) history.push("/#work");
		else scrollToFunction("work");
	};

	componentDidMount() {
		var svg = this.navLogo.current;

		var CONFIG = {
			duration: 1000,
			easing: "cubic-in-out",
			rotation: "none",
		};

		this.navLogo_svgMorpheus = new SVGMorpheus(svg, CONFIG);

		this.navLogoTransform();
	}

	componentDidUpdate() {}

	render() {
		const { scrollToFunction } = this.props;
		return (
			<nav className="nav">
				<div className="container container--horizontally-spaced container--vertically-center">
					<div>
						<Link
							to={`/`}
							onClick={() => {
								this.navLogoTransform();
							}}
						>
							<svg
								ref={this.navLogo}
								className="nav__logo"
								viewBox="0 0 4010 3990"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="icon" fill="#000000" stroke="none">
									<path
										d="M20 2395 l0 -1575 180 0 180 0 0 1400 0 1400 1630 0 1630 0 0 -1630
                    0 -1630 -1810 0 -1810 0 0 -175 0 -175 1990 0 1990 0 0 1980 0 1980 -1990 0
                    -1990 0 0 -1575z"
									/>
									<path
										d="M2099 3130 c-115 -20 -171 -88 -173 -210 -1 -154 85 -228 254 -218
                    94 5 144 29 184 86 38 53 48 158 21 228 -19 49 -75 99 -123 108 -61 11 -120
                    13 -163 6z"
									/>
									<path
										d="M1790 2525 c0 -24 2 -25 76 -25 l75 0 -4 -722 c-4 -777 -4 -782 -56
                    -834 -22 -22 -32 -25 -70 -21 -51 6 -81 34 -81 74 0 46 17 63 65 63 l44 0 7
                    56 c12 98 -7 151 -70 198 -22 17 -42 21 -109 21 -99 0 -147 -20 -185 -78 -37
                    -55 -44 -165 -14 -223 23 -46 74 -99 115 -121 79 -41 258 -54 382 -28 184 39
                    295 143 360 337 50 150 55 227 55 801 l0 527 -295 0 -295 0 0 -25z"
									/>
								</g>
								<g id="text" fill="#000000" stroke="none">
									<path
										id="simple-cup1"
										d="M805 2821 c-78 -20 -147 -83 -171 -154 -24 -71 -15 -190 17 -254 49
                    -95 145 -133 302 -120 88 8 152 39 194 95 40 53 53 98 53 182 -1 114 -39 181
                    -128 226 -44 22 -69 27 -145 30 -51 2 -105 0 -122 -5z"
									/>
									<path
										id="simple-cup2"
										d="M1692 2820 c-41 -10 -102 -52 -130 -90 -24 -32 -52 -126 -52 -174 0
                    -52 31 -143 62 -180 53 -65 97 -81 223 -81 158 0 222 31 272 133 23 48 28 70
                    28 137 0 178 -102 267 -303 264 -37 -1 -82 -5 -100 -9z"
									/>
									<path
										d="M3320 2121 c-145 -20 -245 -89 -307 -212 l-23 -44 0 118 0 117 -350
                    0 -350 0 0 -30 0 -30 75 0 75 0 0 -630 0 -630 -75 0 -75 0 0 -30 0 -30 410 0
                    410 0 0 30 0 30 -61 0 -60 0 3 468 c3 465 3 467 27 527 77 194 223 271 279
                    147 15 -33 17 -102 20 -589 l3 -553 -60 0 -61 0 0 -30 0 -30 410 0 410 0 0 30
                    0 30 -80 0 -80 0 0 478 c0 531 -4 567 -63 676 -44 79 -116 139 -200 165 -75
                    23 -199 33 -277 22z"
									/>
									<path
										d="M450 2070 l0 -30 96 0 96 0 -5 -867 c-4 -881 -7 -953 -43 -1038 -19
                    -47 -50 -65 -107 -65 -94 0 -139 49 -117 129 l11 41 58 0 58 0 7 37 c35 212
                    -54 324 -244 311 -147 -11 -240 -111 -240 -258 0 -80 27 -139 95 -207 53 -53
                    72 -65 136 -85 65 -20 94 -23 234 -23 139 0 170 3 232 23 199 62 327 201 397
                    432 58 190 58 198 63 943 l4 687 -365 0 -366 0 0 -30z"
									/>
									<path
										d="M1360 2070 l0 -30 85 0 85 0 0 -630 0 -630 -80 0 -80 0 0 -30 0 -30
                    430 0 430 0 0 30 0 30 -80 0 -80 0 0 660 0 660 -355 0 -355 0 0 -30z"
									/>
								</g>
								<g id="empty" fill="#000000" stroke="none" />
							</svg>
						</Link>
					</div>
					<ul className="nav__list">
						<Link
							to={`/`}
							onClick={() => {
								this.navLogoTransform();
							}}
						>
							<span className="nav__list-item">Home</span>
						</Link>
						<a
							className="nav__list-item"
							href="#"
							onClick={this.workClickHandler}
						>
							Work
						</a>
						<a
							className="nav__list-item"
							href="#"
							onClick={(e) => {
								e.preventDefault();
								scrollToFunction("contact");
							}}
						>
							Contact
						</a>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;
