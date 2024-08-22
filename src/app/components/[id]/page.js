export async function fetchData() {
	const data = await fetch(`http://localhost:3000/api/products`, {
		method: "GET",
	});
	return data.json();
}

export default async function dataId({ params: { id } }) {
	const products = await fetchData(params.id);
	console.log(products);

	return <main>{params.id}</main>;
}
