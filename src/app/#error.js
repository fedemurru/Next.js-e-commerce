"use client";
import BackButton from "./components/BackButton";

export default function GlobalError({ error }) {
	return (
		<div className="bg-gray-900 h-screen flex items-center justify-center">
			<div className="max-w-md w-full bg-black p-6 rounded-lg shadow-lg text-center">
				<h2 className="text-2xl font-semibold text-red-500 mb-4">
					Something went wrong!
				</h2>

				<BackButton href={"/"} />
			</div>
		</div>
	);
}
