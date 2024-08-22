import Link from "next/link";

const getData = async () => {
	try {
		const res = await fetch("http://localhost:3000/api/products");
		const data = await res.json();
		return data;
	} catch (error) {}
};

const ProductList = async () => {
	const data = await getData();
	//console.log("data", data);
	return (
		<div className="flex flex-col">
			{data.map(({ name, id }) => (
				<Link key={id} href={`/products/`}>
					{name}
				</Link>
			))}
		</div>
	);
};

export default ProductList;
