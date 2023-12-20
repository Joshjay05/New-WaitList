import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
// import ScrollToTopButton from "../Buttton/Button";

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentYear(new Date().getFullYear());
		}, 60000); // Update every minute (you can adjust the interval)

		return () => {
			clearInterval(intervalId); // Clean up the interval when the component unmounts
		};
	}, []);
	return (
		<FootWrapper>
			<footer>
				<section className="footr">
					<div className="ftr-desc">
						<p>GWC Tech School Africa</p>
						<span className="ftr-txt" style={{ fontFamily: "Lato" }}>
							GWC Tech school Africa is a dynamic and innovative educational
							instituition that offers cutting-edge training
						</span>
					</div>

					<section className="short-links">
						{/* <article className='d-links'> */}
						<ul className="f-links">
							<p>Contact</p>

							<li
								style={{ display: "flex", gap: "20px", alignItems: "center" }}>
								{" "}
								<FiPhoneCall /> +2349093069072
							</li>
							<li
								style={{ display: "flex", gap: "20px", alignItems: "center" }}>
								{" "}
								<HiOutlineLocationMarker /> 66 admiralty Estate new road
								Lekki-ajah Lagos
							</li>
							<li
								style={{ display: "flex", alignItems: "center", gap: "20px" }}>
								{" "}
								<AiOutlineMail />{" "}
								<a
									href="mailto:school@gwctechhub.com"
									style={{ textDecoration: "none", color: "white" }}>
									school@gwctechhub.com{" "}
								</a>
							</li>
						</ul>
						{/* </article> */}

						{/* <article className='footer-links'> */}
						<ul className="f-links">
							<p>Company</p>
							<li>About Us</li>
							<li>Blog</li>
							<li>Contact</li>
							<li>Become a Teacher</li>
						</ul>
						<ul className="f-links">
							{" "}
							<p>Links</p>
							<li>Courses</li>
							<li>Events</li>
							<li>Gallery</li>
							<li>FAQs</li>
						</ul>

						<ul className="f-links">
							{" "}
							<p>support</p>
							<li>Documentation</li>
							<li>Forums</li>
							<li>Language Packs</li>
							<li>Release Status</li>
						</ul>

						<ul className="f-links">
							{" "}
							<p>Recommend</p>
							<li>WordPress</li>
							<li>LearnPress</li>
							<li>wooCommerce</li>
							<li>bbPress</li>
						</ul>

						{/* </article> */}
					</section>
				</section>
				<article className="foot">
					<div style={{ display: "flex" }}>
						{/* <section></section> */}
						<p className="copyright">
							Copyright AllRights Reserved © {currentYear} GWC Tech School
							Africa | Powered by GWC Tech Hub LLC.
						</p>
					</div>

					<div className="scroll-to-top">
						{/* <ul className="right-foot">
							<li>Privacy</li>
							<li>Terms</li>
							<li>Sitemap</li>
						</ul> */}
						{/* <ScrollToTopButton /> */}
					</div>
				</article>
			</footer>
		</FootWrapper>
	);
};
const FootWrapper = styled.div`
@media screen and (min-width:40em){
    .footr{
    margin-top:40px;
    display:flex;
    flex-direction:column;
    background:#425CE8;
    color:#fff;
    padding: 20px;
    gap:20px;	 
}
.copyright{
      
		font-size:20px;
    }
.ftr-desc{
display:flex;
    flex-direction:column;
      gap:15px;
      padding-block:20px;
}
.ftr-desc p{
    font-size:20px;
}
.short-links{
    // display:grid;
    display:flex;
    // grid-template-columns:repeat(5, 1fr)
    // justify-content:space-between;
    gap:150px;
    color:#fff;
}
.footer-links{
 
display:grid; 
grid-template-columns:repeat(4,1fr);
gap:90px;
}

.ftr-txt{
    // width:30vw;
    font-size:15px;
}

.d-links{
    display:flex;
    flex-direction:column;
    gap:30px;
} 
.d-links li{
    
    display:flex;
    gap:10px;
    font-size:12px;
}

a{
    text-decoration:none;
    color:#fff;
}
.f-links{
  display:flex;
    flex-direction:column;
//    align-items:left;
     gap:20px;
}
.f-links p{
    font-weight:bold;
    font-size:18px;
}

.f-links li{
    list-style:circle;
    // display:flex;
    text-align:left;
    align-self:left;
}

// .foot{
    
//     display:flex;
//     background:#f5f5f5;
//     justify-content:space-between;
//        align-items:center;
//        padding:10px 25px;
// }
.foot{
    
    display:flex;
    position:relative;
    // flex-direction:column;
    background:#f5f5f5;
    justify-content:center;
    // align-self:center;
       align-items:center;
       padding:10px;
    font-size:10px;
}
.right-foot{
    display:flex;
    align-items:center;
    gap:30px;
    justify-content:space-between;
}
}
 @media screen and (max-width: 40em){
	.short-links{
       display: grid;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    color: #fff;
    grid-template-columns: repeat(2,1fr);
    gap: 35px;
    -webkit-align-items: baseline;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    justify-content: space-between;
}
    .copyright{
        padding-inline:10px;
		font-size: 11px;
}
    }
.footr{
    margin-top:40px;
    display:flex;
    flex-direction:column;
    background:#425CE8;
    color:#fff;
    padding: 20px 25px;
}
.footer-links{  
display:grid; 
grid-template-columns:repeat(2,1fr);
}


.ftr-txt{
   
      font-size: 12px;
    line-height: 1.8em;
}

}
.f-links p{
    font-weight:bold;
    font-size:18px;
}
.f-links li{
    // list-style:circle;
    // display:flex;
    text-align:left;
    align-self:left;
    padding-block:5px;
    font-size:14px;
}
.d-links{
    display:flex;
    flex-direction:column;
    gap:17px;
    font-size:12px
} 
.d-links li{
    
    display:flex;
    gap:10px;
    font-size:12px;
    align-items:center;
}
 align-self:left;
}


.right-foot{
    display:none;
    // align-self:center;
    align-items:center;
    gap:50px;
        justify-content: center;
 
}
 }

`;
export default Footer;
