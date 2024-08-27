"use client";
import BackButton from "./components/BackButton";

export default function GlobalError({ error }) {
	return (
		<html>
			<body>
				<h2>Something went wrong!{error}</h2>
				<BackButton />
			</body>
		</html>
	);
}
