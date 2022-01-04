import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Tagline } from "./Tagline.jsx";
import { Firstheading } from "./Firstheading.jsx";
import { Footer } from "./Footer.jsx";
import { Portfolio } from "./Portfolio.jsx";
import { Contact } from "./Contact.jsx";
import { Services } from "./Services.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Tagline />
			<Firstheading />
			<Services />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
