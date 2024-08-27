import Image from "next/image";
import Link from "next/link";
import { fetchFilteredProducts } from "./lib/fetchFilteredProducts";

export default async function ProductList({ query }) {
	try {
		const filter = await fetchFilteredProducts(query);
		console.log(filter);

		return (
			<div className="flex justify-center px-4 mt-28">
				<div className="flex flex-wrap justify-center gap-6 max-w-7xl w-full">
					{filter.map(({ id, name, price }) => (
						<div
							key={id}
							className="bg-white border rounded-md shadow-md flex flex-col items-center"
							style={{ width: "250px", height: "300px" }}
						>
							<Link href={`/products/${id}`}>
								<div
									className="w-full h-full flex flex-col border-yellow-400"
									style={{ width: "250px", height: "300px" }}
								>
									<div className="relative w-full h-full overflow-hidden">
										<Image
											src="/photo.jpg"
											alt={`Image of ${name}`}
											layout="fill"
											objectFit="cover"
											className="object-cover"
										/>
									</div>
									<div className="w-full h-1/3 flex flex-col items-center p-4">
										<h3 className="text-sm text-gray-700">{name}</h3>
										{price ? (
											<p className="text-sm font-medium text-gray-900 mt-2">
												{price}
											</p>
										) : (
											<p className="text-sm font-medium text-red-500 mt-2">
												Price Unavailable
											</p>
										)}
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		);
	} catch (error) {
		console.error("Error fetching product data:", error);
		return (
			<div className="flex justify-center items-center h-screen">
				<p className="text-red-500">
					An unexpected error occurred: {error.message || "Unknown error"}
				</p>
			</div>
		);
	}
}
