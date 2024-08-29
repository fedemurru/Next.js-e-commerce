"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

function Search() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	function handleSearch(term) {
		const params = new URLSearchParams(searchParams);

		if (term.trim()) {
			params.set("query", term);
		} else {
			params.delete("query");
		}

		router.push(`${pathname}?${params.toString()}`);
	}

	function handleKeyDown(e) {
		if (e.key === "Enter") {
			handleSearch(e.target.value);
			e.target.value = "";
		}
	}

	return (
		<div>
			<input
				type="text"
				id="search-navbar"
				className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Search..."
				onKeyDown={handleKeyDown}
				defaultValue={searchParams.get("query") || ""}
			/>
		</div>
	);
}

export default Search;
