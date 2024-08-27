import { data } from "@/app/api/products/data"; // Adjust path as needed

export async function fetchFilteredProducts(query) {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000));

	// Filter data based on the query in the product name
	const filteredProducts = data.filter((product) =>
		product.name.toLowerCase().includes(query.toLowerCase())
	);

	return filteredProducts;
}
