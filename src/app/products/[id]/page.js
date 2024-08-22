export default async function dataId({ params: { id } }) {
	const productId = Number(id);

	const data = await fetch(`http://localhost:3000/api/products/${productId}`);
	const product = await data.json();

	if (!product || product.message) {
		return <div>{product.message || "Product not found"}</div>;
	}

	return (
		<div>
			<h1>Product: {product.name}</h1>
			<p>Description: {product.description}</p>
			<p>Price:{product.price}</p>
		</div>
	);
}
