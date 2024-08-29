import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<main>
			<Navbar />
			<div className="text-xl flex flex-col justify-center h-screen items-center text-center px-4">
				<h1 className="text-3xl font-bold uppercase tracking-wide">About Us</h1>
				<p className="mt-4 max-w-2xl">
					Welcome to George E-Commerce, your one-stop destination for the latest
					and greatest smartphones! Our mission is to bring you a curated
					selection of cutting-edge phones from top brands at unbeatable prices.
					Whether you're looking for the latest flagship or a budget-friendly
					option, we've got you covered.
				</p>
				<p className="mt-4 max-w-2xl">
					We pride ourselves on providing not only top-tier products but also
					exceptional customer service. Our team is passionate about technology
					and is here to help you find the perfect device to match your needs
					and lifestyle.
				</p>
				<p className="mt-4 max-w-2xl">
					At George E-Commerce, we believe in transparency and trust. That's why
					every product on our site is carefully vetted for quality, and we
					offer detailed descriptions to help you make an informed decision.
				</p>
				<p className="mt-4 max-w-2xl">
					Thank you for choosing George E-Commerce. We look forward to helping
					you stay connected with the best phones on the market!
				</p>
			</div>
		</main>
	);
}
