import Image from "next/image";
import getData from "./components/ProductList";

import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<main>
			<Navbar />
			<ProductList />
		</main>
	);
}
