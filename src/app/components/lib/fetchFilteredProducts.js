import { data } from "@/app/api/products/data"; // Adjust path as needed

export function fetchFilteredProducts(query) {
	const filteredProducts = data.filter((product) =>
		product.name.toLowerCase().startsWith(query.toLowerCase())
	);

	return filteredProducts;
}

// export async function fetchFilteredProducts(query) {
// 	try {
// 		// If the query is empty, fetch all products or handle it accordingly
// 		const url = query
// 			? `http://localhost:3000//api/products?query=${encodeURIComponent(query)}`
// 			: `http://localhost:3000//api/products`;

// 		// Use a relative URL for flexibility in different environments
// 		const res = await fetch(url, {
// 			cache: "no-store",
// 		});

// 		const products = await res.json();

// 		return products;
// 	} catch (error) {
// 		console.error("Error fetching product data:", error.message);
// 		throw error;
// 	}
// }
