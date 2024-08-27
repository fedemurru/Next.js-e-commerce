import { NextResponse } from "next/server";
import { data } from "./data";

export const GET = (req, res) => {
	try {
		if (!data) {
			return { message: "No data available" };
		}

		return NextResponse.json(data);
	} catch (error) {}
};
