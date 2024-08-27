import { NextResponse } from "next/server";
import { data } from "./data";

export const GET = (req, res) => {
	try {
		if (!data) {
			return NextResponse.json(
				{ message: "No data available" },
				{ status: 404 } // Not Found status code
			);
		}

		return NextResponse.json(data);
	} catch (error) {
		console.error("Error handling GET request:", error);

		return NextResponse.json(
			{
				message: "An error occurred while processing your request.",
				cause: error.message || "Unknown error",
			},
			{ status: 500 } // Internal Server Error status code
		);
	}
};
