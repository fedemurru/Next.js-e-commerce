import BackButton from "@/app/components/BackButton";
import Navbar from "@/app/components/Navbar";

export default async function DataId({ params: { id } }) {
	const productId = Number(id);

	const data = await fetch(`http://localhost:3000/api/products/${productId}`);
	const product = await data.json();

	if (!product || product.message) {
		return <div>{product.message || "Product not found"}</div>;
	}

	return (
		<>
			<Navbar />
			<div className="mt-28 flex flex-col">
				<h1>Product: {product.name}</h1>
				<p>Description: {product.description}</p>
				<p>Price:{product.price}</p>
				<BackButton />
			</div>
		</>
	);
}
