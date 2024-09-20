import React from "react";
import Signup from "../signup/page";
import Navbar from "../components/Navbar";

const page = () => {
	return (
		<div className="min-h-screen flex items-center justify-center ">
			<Navbar />
			<Signup />
		</div>
	);
};

export default page;
