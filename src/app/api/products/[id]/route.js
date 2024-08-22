import { NextResponse } from "next/server";
import { data } from "../data";

const findById = (id) => {
	return data.find((el) => el.id === id);
};

export async function GET(req, { params }) {
	const id = Number(params.id);
	const result = findById(id);
	if (!result) {
		return NextResponse.json({
			message: `product with id of ${params.id} dose not exist`,
		});
	}
	return NextResponse.json(result);
}
