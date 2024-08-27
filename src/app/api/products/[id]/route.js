import { NextResponse } from "next/server";
import { data } from "../data";

const findById = (id) => {
	return data.find((el) => {
		return el.id == id;
	});
};

export const GET = (req, { params }) => {
	try {
		const id = Number(params.id);
		if (!id) {
			return NextResponse.json(
				{
					message: `invalid product with id`,
				},
				{ status: 400 }
			);
		}
		const result = findById(id); // null

		if (!result) {
			return NextResponse.json(
				{
					message: `product with id of ${params.id} does not exist`,
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(result);
	} catch (error) {
		const errorArray = error.toString().split(":");
		const errorType = errorArray[0] || "Unknown Error";
		const cause = errorArray[1] || "An unexpected error occurred";
		return NextResponse.json(
			{
				error: {
					message: cause,
					code: 500,
					cause: errorType,
				},
			},
			{ status: 500 }
		);
	}
};
