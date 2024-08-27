"use client";
import BackButton from "./components/BackButton";

export default function GlobalError({ error }) {
	return (
		<html>
			<body>
				<h2>Something went wrong!</h2>
				<h4>{error.message}</h4>
				<BackButton />
			</body>
		</html>
	);
}
