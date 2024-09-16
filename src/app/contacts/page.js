import React from "react";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

const page = () => {
	return (
		<div className="min-h-screen flex items-center justify-center ">
			<Navbar />
			<ContactForm />
		</div>
	);
};

export default page;
