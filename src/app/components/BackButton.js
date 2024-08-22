import Link from "next/link";

const BackButton = () => {
	return (
		<Link href="/">
			<button
				className="bg-white dark:bg-gray-900  hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:hover:bg-blue-700  "
				type="button"
			>
				&larr; Back
			</button>
		</Link>
	);
};

export default BackButton;
