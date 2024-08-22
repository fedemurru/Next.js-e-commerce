export default async function dataId({ params: { id } }) {
	const productId = Number(params.id);
	//console.log(productId);
	const data = await fetch(`http://localhost:3000/api/products/${productId}`);
	const res = await data.json();
	//console.log(products);
	return <div>{res.name}</div>;
}
