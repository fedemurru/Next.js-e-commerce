import Image from "next/image";
import getData from "./components/ProductList";

import ProductList from "./components/ProductList";

export default function Home() {
	return (
		<main>
			<ProductList />
		</main>
	);
}
