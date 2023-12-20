// import { useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "./Image/Logo.png";
// import { BiDownArrow } from "react-icons/bi";
// import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const NavBar = ({ handleMouseLeave }) => {
	// const [show, setShow] = useState(false);
	//     const handleDropdownClose = () => {
	//     setShow(false);
	//   };
	// const handleClick = () => {
	// 	setShow(!show);
	// };

	return (
		<NavWrapper>
			<nav className="navbar">
				<div className="title">
					<img src={logo} alt="" className="lG" />
				</div>
				<ul className="menu">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>

					<li
					// className="dropdown"
					// onClick={handleClick}
					// onMouseEnter={handleClick}
					>
						<a href="#school">School</a>
						{/* <BiDownArrow /> */}
						{/* {show && <Dropdown handleDropdownClose={setShow} />} */}
					</li>
					<Link to="/faq">FAQS</Link>
					<li>
						<a href="/#">Tuition</a>
					</li>

					{/* <li><a href="/">Join WaitList</a></li> */}
				</ul>
				{/* <button className='cta'> */}
				<a
					href="#input"
					className="join-btn
      ">
					Join WaitList
				</a>

				{/* </button> */}
			</nav>
		</NavWrapper>
	);
};

const NavWrapper = styled.div`
	@media screen and (min-width: 40em) {
		.navbar {
			font-family: "Lato";
			//   background:#f5f5f5;
			//  border-bottom: 1px solid mediumblue;
			display: flex;
			justify-content: space-around;
			// gap:240px;
			padding: 10px 0px;
			align-items: center;
			height: 14vh;
			font-family: "Lato";
		}

		.dropdown {
			color: #fff;
			text-decoration: mediumblue;
			padding: 5px;
			font-family: "Lato";
			//  border:1px solid mediumblue;
			//  background:  mediumblue;
		}

		.dropdown:hover {
			color: #fff;
			text-decoration: none;
			padding: 5px;
			font-family: "Lato";
			border: 1px solid mediumblue;
			background: mediumblue;
		}

		.menu {
			display: flex;
			list-style: none;
			margin: 0;
			padding: 0;
			align-items: center;
			font-family: "Lato";
		}

		.menu li {
			margin-inline: 30px;
			color: mediumblue;
			font-family: "Lato";
		}

		.menu a {
			color: mediumblue;
			text-decoration: none;
			padding: 5px;
			font-family: "Lato";
		}

		.menu a:hover {
			background-color: mediumblue;
			color: white;
			font-family: "Lato";
			border: 1px silod mediumblue;
			border-radius: 5px;
		}

		.dropdown {
			position: relative;
			cursor: pointer;
			padding-inline: 22px;
			display: flex;
			align-items: center;
			gap: 10px;
			font-family: "Lato";
		}
		// .dropdown span{
		//   color:mediumblue;
		//   text-decoration: none;
		//   padding: 5px;
		//   font-family: 'Lato';
		// }
		// .dropdown span:hover{
		//   background-color: mediumblue;
		//   color:white;
		// font-family: 'Lato';
		//   border-radius: 6px;
		// }

		dropdown {
			position: relative;
			display: flex;
			align-items: center;
			gap: 5px;
			text-decoration: none;
		}
		.dropdown:hover {
			color: #fff;
			text-decoration: none;
			padding: 5px;
			font-family: "Lato";
			border: 1px solid mediumblue;
			background: mediumblue;
		}
		.dropdown-menu a {
			color: #000;
			text-decoration: none;
			font-family: "Lato";
		}

		.dropdown-menu li {
			margin: 0;
			//   padding: 3px 10px;
		}

		.dropdown-menu a {
			color: #000;
			text-decoration: none;
			font-family: "Lato";
		}

		// .dropdown:hover .dropdown-menu {
		//   display: block;
		// }
		.dropdown.open .dropdown-menu {
			display: block;
			font-family: "Lato";
		}
	}

	.dropdown-menu a:hover {
		color: #fff;
		text-decoration: none;
		padding: 5px;
		font-family: "Lato";
		border: 1px solid mediumblue;
		background: mediumblue;
	}

	@media screen and (max-width: 40em) {
		.navbar {
			display: flex;
			// flex-direction:column;
			// gap:8px;
			align-items: center;
			padding: 10px;

			// height:14vh
			font-family: "Lato";
			justify-content: space-between;
		}
		.title img {
			height: 49px;
		}

		.join-btn {
			/* padding: 5px 10px; */
			font-size: 8px;
			// padding: 1px 2px;
			border-radius: 3px;
		}
		.menu {
			// visibility:hidden;
			display: flex;
			// display:none;
			// flex-direction:column;
			align-items: center;
			gap: 5px;
			// background:red;
			font-size: 9px;
		}
		.dropdown {
			position: relative;
			display: flex;
			align-items: center;
			gap: 5px;
			text-decoration: none;
		}
		.dropdown:hover {
			color: #fff;
			text-decoration: none;
			padding: 5px;
			font-family: "Lato";
			border: 1px solid mediumblue;
			background: mediumblue;
		}
		.dropdown-menu a {
			color: #000;
			text-decoration: none;
			font-family: "Lato";
		}
		.menu li {
			//   margin-inline: 30px;
			color: mediumblue;
			font-family: "Lato";
		}
		.dropdown-menu a:hover {
			color: #fff;
			text-decoration: none;
			padding: 5px;
			font-family: "Lato";
			border: 1px solid mediumblue;
			background: mediumblue;
		}

		.menu a {
			color: mediumblue;
			text-decoration: none;
			padding: 5px;
			font-family: "Lato";
			//  border:1px solid mediumblue;
		}
		.menu a:hover {
			color: #fff;
			text-decoration: none;
			padding: 5px;
			font-family: "Lato";
			border: 1px solid mediumblue;
			background: mediumblue;
		}
		// .join-btn{
		//     font-size: 1;
		//     border: 1px solid #425CE8;
		//     color: white;
		//     background-color: #425CE8;
		//     text-decoration: none;
		//     font-size: 9px;
		//     padding: 3px;
		//     border-radius: 6px;
		//     /* margin-inline: 10px;
		// }
	}
`;

export default NavBar;
