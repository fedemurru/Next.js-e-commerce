import Image from "next/image";
import getData from "./products/ProductList";

import ProductList from "./products/ProductList";

export default function Home() {
	return (
		<main>
			<ProductList />
		</main>
	);
}
