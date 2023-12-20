import { React, useState, useEffect } from "react";
import waitImage from "./Image/gwc.jpeg";
import styled from "styled-components";
import "./waiting.css";
import OurPrograms from "./OurPrograms";
import Testimonials from "./Testimonials";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Waiting = () => {
	const apiUrl = process.env.REACT_APP_BASE_URL;

	const [email, setEmail] = useState("");
	const handleEmailChange = (event) => {
		event?.preventDefault();
		setEmail(event.target.value);
	};

	const handleSubmit = async (e) => {
		e?.preventDefault();

		if (email === "") {
			return;
		}
		console.log(process.env);
		try {
			const response = await fetch(`${apiUrl}/api/v1/wait-lists`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					// password: password,
					// "email": "my-email@email.com"
				}),
			});

			const data = await response.json();
			console.log(data);
			if (response.ok) {
				fetchData();
				toast.success("email successfully added");
			} else {
				toast.error(`${data.error}`);
				throw new Error("Network response was not ok");
			}
		} catch (error) {
			console.error(error);
		}
	};
	const [count, setCount] = useState("");
	const fetchData = async () => {
		try {
			const response = await fetch(`${apiUrl}/api/v1/wait-lists`);
			const data = await response.json();
			setCount(data?.count);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	// console.log(count)

	// const handleJoin = () => {
	//   handleSubmit();
	// Simulating a user joining action
	// Replace this with your actual logic for user joining
	// const newUser = { name: 'John Doe', image: 'path/to/image.jpg' };

	// setUsers([...users, newUser]);
	//   setCount(count + 1);
	// };

	return (
		<WaitList>
			<main>
				{/* <Navbar/> */}
				<article>
					{/* <div className='wait-top'>
      <img src={icon} alt=''/> 


      <a href='/#' className='join-btn
      '>Join the waiting List</a>
        </div>   */}

					{/* <nav className='nav'>
  <p className='title'><img src={icon} alt=''/></p> 
<ul className='middle'> 
  <li>Home</li> 
  <li>School &#x2304;</li>
  <li>FAQS</li>
  <li>AboutUs</li>
  <li>Join WaitList</li>
  <li>Tuition</li></ul> 
<div className='cta'>
    <a href='/#' className='join-btn
      '>Join the waiting List</a>
  
  </div>
  </nav> */}
					<NavBar />
					{/* <Dropdown/> */}
				</article>

				<section className="sec-diff" id="inputt">
					<article className="wait-textArea">
						<h3>
							<img src="" alt="" />
							<span>Join the waitlist?</span>
						</h3>

						<p className="wait-text">
							Are you a tech student looking for exciting opportunities and
							resources? Submit your email to join our waitlist and be the first
							to know when we launch our platform.
							<br />
							<br />
							<ul className="why-waitlist">
								<p>Why join the waitlist?</p>
								<li>
									1. Early Access: Get exclusive early access to our platform
									and gain a competitive advantage in your tech journey.
								</li>
								<li>
									2. Learning Resources: Gain access to a wealth of educational
									materials, courses, and tools tailored specifically for you
								</li>
							</ul>
						</p>
						{/* <input type='email' name='email' placeholder='Enter your email' required className='w-input'/>
            <button type='submit'  
             onClick={handleJoin}>Submit</button> */}
						<form onSubmit={handleSubmit} id="input" className="form">
							<input
								type="email"
								value={email}
								onChange={handleEmailChange}
								placeholder="Enter your email"
								required
								className="w-input"
							/>
							<button type="submit" className="submit-btn">
								Submit
							</button>
						</form>
						<div></div>

						<div>
							<span>
								{/* <div className="user-container">
        {users.map((user, index) => (
            <img key={index} src={user.image} 
            alt={user.name} />
            ))}
      </div> */}
								<p>{count} students joined the waitlist</p>
							</span>
						</div>
					</article>

					<article className="wait-image">
						<img src={waitImage} alt="student" />
					</article>
				</section>
				<OurPrograms />
				<section className="test">
					<Testimonials />
				</section>

				{/* <TestCarousel/> */}

				<section className="footer">
					Want to learn a tech skill and set a career path for yourself?
					<a href="#input">
						<button className="join-btn">Join The Waitlist</button>
					</a>
				</section>
				<Footer />
				<ToastContainer
					position="top-center"
					autoClose={100}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</main>
		</WaitList>
	);
};

const WaitList = styled.div`
	.wait-top {
		display: flex;
		// gap: 900px;
		justify-content: space-between;
		align-items: center;
		font-family: "Lato", sans-serif;
	}
	.nav {
		background: #f5f5f5;
		border-bottom: 1px solid mediumblue;
		display: flex;
		justify-content: space-around;
		// gap:240px;
		padding: 10px 0px;
		align-items: center;
		height: 14vh;
		font-family: "Lato", sans-serif;
	}
	.nav li {
		color: mediumblue;
	}
	.nav li:hover {
		color: red;
		border-bottom: 1px solid mediumblue;
	}
	.middle {
		display: flex;
		//   justify-content:space-between;
		align-items: center;
		gap: 30px;
		cursor: pointer;
		font-family: "Lato", sans-serif;
	}
	.sec-diff {
		// display:grid;

		// grid-template-columns:repeat(2, 1fr);
	}
`;

export default Waiting;
