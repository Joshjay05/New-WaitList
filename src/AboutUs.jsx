import React from "react";
import "./waiting.css";
import short from "./Image/short.png";
import styled from "styled-components";

const AboutUs = () => {
	return (
		<AbtWrapper>
			<div id="about" className="abt-us">
				<div className="underlined">
					<img src={short} alt="" className="mission-img" />
					<p className="a-head">Empowering Students</p>
					<p className="desc-details">
						At GWC Tech School Africa, we believe that every individual has the
						potential to make a positive impact in the world. Our programs are
						designed to help students achieve their goals and realize their full
						potential, whether they are beginners or experienced professionals
						looking to enhance their skills. We provide a supportive and
						inclusive learning environment that fosters growth and empowers our
						students to become leaders in their respective fields.
					</p>
				</div>
				<div className="underlined">
					<img src={short} alt="" className="mission-img" />
					<p className="a-head">Our Mission Statement</p>
					<p className="desc-details">
						Our mission at GWC Tech School Africa is to provide world-class
						training and education to students across Africa. We are dedicated
						to creating a new generation of skilled and empowered tech
						professionals who can drive growth and development in the region.
						Through our comprehensive programs and personalized support, we aim
						to equip our students with the tools they need to succeed in the
						ever-evolving tech landscape.
					</p>
				</div>
				<div className="underlined">
					<img src={short} alt="" className="vission" />
					<p className="a-head">Our Vision</p>
					<p className="desc-details">
						At GWC Tech School Africa, our vision is to help our students
						achieve their goals and realize their full potential. We believe
						that by empowering individuals with quality education and training,
						we can make a positive impact on the world. We strive to create an
						environment where innovation, creativity, and collaboration thrive,
						preparing our students to become leaders and change-makers in the
						tech industry.
					</p>
				</div>

				<div className="underlined">
					<img src={short} alt="" className="s-story" />
					<p className="a-head">Success Stories</p>
					<p className="desc-details">
						Our graduates have made a significant impact in the tech industry,
						working at some of the world's leading tech companies. Our alumni
						network is a testament to the quality of education and training we
						provide, and we are proud to see our students making a positive
						impact on the world.
					</p>
				</div>
			</div>
		</AbtWrapper>
	);
};

export default AboutUs;
const AbtWrapper = styled.div`
	@media (min-width: 40em) {
		.abt-us {
			margin-top: 40px;
		}

		.underlined {
			position: relative;
			padding-block: 20px;
			padding-inline: 62px;
			font-family: "Lato";
		}
		.a-head {
			position: absolute;
			top: 6px;
			z-index: 3;
			font-size: 25px;
			/* line-height: .5rem; */
			left: 5vw;
			margin: 0;
			font-family: "Lato";
		}
		.vission {
			position: relative;
			width: 10vw;
			height: 2vh;
		}
		.s-story {
			width: 13vw;
			height: 2vh;
		}
		.desc-details {
			line-height: 2.8em;
			font-size: 16px;
			font-family: "Lato";
		}
	}

	@media screen and (max-width: 40em) {
		.underlined {
			position: relative;
			/* padding-block: 20px; */
			padding-inline: 12px;
			font-family: "Lato";
		}
		.mission-img {
			width: 59vw;
			/* height: 3vh;   */
		}

		.a-head {
			position: absolute;
			top: -6px;
			z-index: 3;
			font-size: 17px;
			/* line-height: .5rem; */
			left: 7%;
			margin: 0;
			font-family: "Lato";
		}
		.vission {
			position: relative;

			width: 31vw;
			height: 1.5vh;
		}
		.desc-details {
			line-height: 2.8em;
			font-size: 15px;
			font-family: "Lato";
		}
		.abt-us {
			margin-top: 40px;
		}
	}
`;
