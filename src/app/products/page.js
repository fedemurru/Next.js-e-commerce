const page = async () => {
	const data = await getData();
	console.log("data", data);
	return (
		<div>
			{data.map(({ name, id }) => (
				<div key={id} href={`/products/${id}`}>
					{name}
				</div>
			))}
		</div>
	);
};

export default page;
