// import { data } from "@/app/api/products/data"; // Adjust path as needed

// export function fetchFilteredProducts(query) {
// 	const filteredProducts = data.filter((product) =>
// 		product.name.toLowerCase().startsWith(query.toLowerCase())
// 	);

// 	return filteredProducts;
// }

export async function fetchFilteredProducts(query) {
	try {
		const res = await fetch(`${process.env.BASE_URL_DEV}/products`, {
			cache: "no-store",
		});

		if (res.ok) {
			const products = await res.json();

			// Apply client-side filtering if query is provided
			const filteredProducts = query
				? products.filter((product) =>
						product.name.toLowerCase().includes(query.toLowerCase())
				  )
				: products;

			//console.log("KKK", filteredProducts);

			return filteredProducts;
		}
		return res;
	} catch (error) {
		console.error("Error fetching product data:", error.message);
		throw error;
	}
}
