import React, { useState } from "react";
import "./testimonial.css"; // Import the CSS file for styling
import jane from "./Image/Ellipse 45.png";
import john from "./Image/Ellipse 44.png";
import mark from "./Image/Ellipse 49.png";
// import jones from '../Image/Ellipse 46.png'

const testimonials = [
	{
		id: 1,
		name: "John Doe",
		text: "I can confidently say that GWC Tech School Africa played a pivotal role in shaping my career as a software engineer. The comprehensive curriculum and hands-on approach helped me gain the practical skills needed to excel in the industry and I am now working at a leading tech company. Thank you,",
		image: john,
	},
	{
		id: 2,
		name: "Jane Smith",
		text: "I can confidently say that GWC Tech School Africa played a pivotal role in shaping my career as a software engineer. The comprehensive curriculum and hands-on approach helped me gain the practical skills needed to excel in the industry and I am now working at a leading tech company. Thank you,",
		image: jane,
	},
	{
		id: 3,
		name: "Mark Johnson",
		text: "I can confidently say that GWC Tech School Africa played a pivotal role in shaping my career as a software engineer. The comprehensive curriculum and hands-on approach helped me gain the practical skills needed to excel in the industry and I am now working at a leading tech company. Thank you, GWC",
		image: mark,
	},
	//    {
	//     id: 4,
	//     name: "Mark Johnson",
	//     text: "Aenean nec ipsum id mauris tempus scelerisque. Vivamus ultrices magna ac turpis varius fringilla.",
	//     image: jones,
	//   },
	//    {
	//     id: 5,
	//     name: "Mark Johnson",
	//     text: "Aenean nec ipsum id mauris tempus scelerisque. Vivamus ultrices magna ac turpis varius fringilla.",
	//     image: jones,
	//   },
	//   {
	//     id: 6,
	//     name: "Jane Smith",
	//     text: "Ut varius erat id sem ullamcorper interdum. Nulla eleifend ligula a arcu blandit fermentum.",
	//     image: jane
	//   },
	//     {id: 7,
	//     name: "John Doe",
	//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor malesuada facilisis.",
	//     image: john,
	//   },
];

const TestimonialSlider = () => {
	const [activeIndex, setActiveIndex] = useState(1);

	const handleNext = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handleTestimonialClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className="testimonial-slider">
			<div className="testimonial-container">
				{testimonials?.map((testimonial, index) => {
					const isActive = index === activeIndex;
					const transformStyle = isActive ? "scale(1.2)" : "";

					return (
						<div
							key={testimonial.id}
							className={`testimonial ${isActive ? "active" : ""}`}
							style={{ transform: transformStyle }}
							onClick={() => handleTestimonialClick(index)}>
							<div className="testimonial-content">
								<div className="testimonial-image">
									<img
										key={testimonial.id}
										src={testimonial.image}
										alt={testimonial.name}
									/>
								</div>
								<p className="testimonial-name">{testimonial.name}</p>
								<p className="testimonial-text">{testimonial.text}</p>
							</div>
						</div>
					);
				})}
			</div>
			<button className="next-button" onClick={handleNext}>
				Next
			</button>
		</div>
	);
};

export default TestimonialSlider;
