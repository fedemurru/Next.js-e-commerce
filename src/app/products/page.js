import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

export default function Home({ searchParams }) {
	const query = searchParams?.query || "";
	return (
		<main>
			<Navbar />
			<ProductList query={query} />
		</main>
	);
}
