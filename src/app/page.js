import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<main>
			<Navbar />
			<div className="text-xl flex justify-center h-screen items-center text-center">
				<h1>Welcome to my e-commerce Home Page</h1>
			</div>
		</main>
	);
}
