// import { data } from "@/app/api/products/data"; // Adjust path as needed

// export function fetchFilteredProducts(query) {
// 	const filteredProducts = data.filter((product) =>
// 		product.name.toLowerCase().startsWith(query.toLowerCase())
// 	);

// 	return filteredProducts;
// }

export async function fetchFilteredProducts(query) {
	try {
		// Construct the URL based on the presence of a query

		// Fetch data from the API
		console.log("process.env.BASE_URL_DEV", process.env.BASE_URL_DEV);
		const res = await fetch(`${process.env.BASE_URL_DEV}/products`, {
			cache: "no-store", // Ensure you are not caching for fresh data
		});

		// Parse the JSON data from the response
		if (res.ok) {
			const products = await res.json();
			// console.log("Fetched products:", products);

			// Apply client-side filtering if query is provided
			const filteredProducts = query
				? products.filter((product) =>
						product.name.toLowerCase().includes(query.toLowerCase())
				  )
				: products;

			console.log("KKK", filteredProducts);

			return filteredProducts;
		}
		return res;
	} catch (error) {
		// Log the error for debugging
		console.error("Error fetching product data:", error.message);
		// Re-throw the error for further handling (if needed)
		throw error;
	}
}
