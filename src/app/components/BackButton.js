import Link from "next/link";

const BackButton = () => {
	return (
		<Link href="/">
			<button type="button">&larr; Back</button>
		</Link>
	);
};

export default BackButton;
