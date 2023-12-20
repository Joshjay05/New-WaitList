import React from "react";
import short from "./Image/short.png";

import medium from "./Image/long.png";
import { AiOutlineCalendar } from "react-icons/ai";
import { TfiMedallAlt } from "react-icons/tfi";
import { LuPanelTopInactive } from "react-icons/lu";
import { AiTwotoneStar } from "react-icons/ai";
import "./waiting.css";
import software from "./Image/software.png";
import AboutUs from "./AboutUs";
import styled from "styled-components";

const OurPrograms = () => {
	return (
		<ProgWrapper>
			<article id="about" className="prog-intro">
				<div className="underlined">
					<img src={short} alt="" className="v-short" />
					<p className="vshort-head">Our programs</p>
					<p className="desc-details">
						Welcome to GWC Tech School Africa, where innovation meets education.
						As a dynamic and innovative educational institution, we offer
						cutting-edge training programs in technology and computer science.
						Our goal is to equip individuals with the skills and knowledge they
						need to thrive in today's rapidly evolving tech industry.
					</p>
				</div>

				<div className="underlined">
					<img src={medium} alt="" className="medium" />
					<p className="w-head">Our Commitment to Quality Education</p>
					<p className="desc-details">
						We at GWC Tech School Africa, we are committed to providing
						top-notch education that empowers individuals to become experts in
						the field of technology. Our experienced faculty members are
						dedicated to ensuring that each student receives personalized
						attention and support throughout their learning journey. With a
						focus on meeting the demands of the fast-paced, technology-driven
						world, we strive to deliver quality education that prepares our
						students for success
					</p>
				</div>
				<div className="underlined-head">
					<img src={short} className="mid" alt="" />
					<p className="sw-head">Comprehensive Programs</p>
				</div>
			</article>

			<section id="school" className="course-section">
				<article className="course-row">
					<div>
						<img src={software} alt="" className="course-image" />
						<ul className="course-details">
							<li className="duration">
								<AiOutlineCalendar className="c-icon" /> 7-9 Months
							</li>
							<li className="topics">
								{" "}
								<LuPanelTopInactive className="c-icon" />
								10 Topics
							</li>
							<li className="classes">
								{" "}
								<TfiMedallAlt className="c-icon" /> Classes
							</li>
						</ul>
						<p className="sch-title">School of software</p>
						<p className="course-pr">
							<span>
								$200
								<b className="faint"> (you can pay in installments) </b>
							</span>{" "}
							<a href="#input" className="lrn-btn">
								Learn More
							</a>
						</p>
						<h6 className="point">
							5.0
							<b className="star-icon">
								<AiTwotoneStar /> <AiTwotoneStar />
								<AiTwotoneStar />
								<AiTwotoneStar />
								<AiTwotoneStar />
							</b>{" "}
							(841)
						</h6>
					</div>
				</article>
				<article className="course-row">
					<div>
						<img src={software} alt="" className="course-image" />
						<ul className="course-details">
							<li className="duration">
								<AiOutlineCalendar className="c-icon" /> 7-9 Months
							</li>
							<li className="topics">
								{" "}
								<LuPanelTopInactive className="c-icon" />
								10 Topics
							</li>
							<li className="classes">
								{" "}
								<TfiMedallAlt className="c-icon" /> Classes
							</li>
						</ul>
						<p className="sch-title">School Of Design</p>
						<p className="course-pr">
							<span>
								$200<b className="faint"> (you can pay in installments) </b>
							</span>{" "}
							<a href="#input" className="lrn-btn">
								Learn More
							</a>
						</p>
						<h6 className="point">
							5.0{" "}
							<b className="star-icon">
								<AiTwotoneStar /> <AiTwotoneStar />
								<AiTwotoneStar />
								<AiTwotoneStar />
								<AiTwotoneStar />
							</b>{" "}
							(841)
						</h6>
					</div>
				</article>
			</section>

			<section className="course-section">
				<article className="course-row">
					<div>
						<img src={software} alt="" className="course-image" />
						<ul className="course-details">
							<li className="duration">
								<AiOutlineCalendar className="c-icon" /> 7-9 Months
							</li>
							<li className="topics">
								{" "}
								<LuPanelTopInactive className="c-icon" />
								10 Topics
							</li>
							<li className="classes">
								{" "}
								<TfiMedallAlt className="c-icon" /> Classes
							</li>
						</ul>
						<p className="sch-title">School Of Communication</p>
						<p className="course-pr">
							<span>
								{" "}
								$200
								<b className="faint"> (you can pay in installments) </b>
							</span>{" "}
							<a href="#input" className="lrn-btn">
								Learn More
							</a>
						</p>
						<h6 className="point">
							5.0{" "}
							<b className="star-icon">
								<AiTwotoneStar /> <AiTwotoneStar />
								<AiTwotoneStar />
								<AiTwotoneStar />
								<AiTwotoneStar />
							</b>{" "}
							(841)
						</h6>
					</div>
				</article>
				<article className="course-row">
					<div>
						<img src={software} alt="" className="course-image" />
						<ul className="course-details">
							<li className="duration">
								<AiOutlineCalendar className="c-icon" /> 7-9 Months
							</li>
							<li className="topics">
								{" "}
								<LuPanelTopInactive className="c-icon" />
								10 Topics
							</li>
							<li className="classes">
								{" "}
								<TfiMedallAlt className="c-icon" /> Classes
							</li>
						</ul>
						<p className="sch-title">School Of Data</p>
						{/* <div className="course-brkdwn"> */}
						<p className="course-pr">
							<span>
								$200
								<b className="faint"> (you can pay in installments) </b>
							</span>{" "}
							<a href="#input" className="lrn-btn">
								Learn More
							</a>
						</p>

						<p className="point">
							5.0{" "}
							<b className="star-icon">
								<AiTwotoneStar /> <AiTwotoneStar />
								<AiTwotoneStar />
								<AiTwotoneStar />
								<AiTwotoneStar />
							</b>{" "}
							(841)
						</p>
						{/* </div> */}
					</div>
				</article>
			</section>
			<AboutUs />
		</ProgWrapper>
	);
};
const ProgWrapper = styled.section`
	@media (max-width: 40em) {
		margin-ininline: 20px;
	}
	.course-brkdwn {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
`;
export default OurPrograms;
