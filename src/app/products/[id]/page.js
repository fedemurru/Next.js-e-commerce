import BackButton from "@/app/components/BackButton";
import Navbar from "@/app/components/Navbar";

export default async function DataId({ params: { id } }) {
	const productId = Number(id);

	const data = await fetch(`http://localhost:3000/api/products/${productId}`, {
		cache: "no-store",
	});
	const product = await data.json();

	if (!product || product.message) {
		return <div>{product.message || "Product not found"}</div>;
	}

	return (
		<>
			<Navbar />
			<div className="mt-28 flex flex-col border">
				<div className="flex flex-col md:flex-row items-center">
					<div className="w-full md:w-1/2">
						<img
							src="/photo.jpg"
							alt={product.name}
							className="object-cover w-full h-64 md:h-auto rounded"
						/>
					</div>
					<div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0 ">
						<h1 className="text-3xl font-bold">{product.name}</h1>
						<p className="text-lg text-gray-400 mt-2">{product.description}</p>
						<div className="flex justify-start ">
							<p className="text-xl font-semibold  text-gray-400 mt-4 ">
								{product.price}
							</p>
							<div className="mt-2 ml-4">
								<BackButton />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
