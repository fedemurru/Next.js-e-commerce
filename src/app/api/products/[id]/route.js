import { NextResponse } from "next/server";
// import { data } from "../data";

// /src/app/api/products/[id]/route.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
	try {
		const id = Number(params.id);

		if (isNaN(id)) {
			return NextResponse.json(
				{
					message: "Invalid id",
				},
				{ status: 400 }
			);
		}

		const product = await prisma.product.findUnique({
			where: { id: id },
		});

		if (!product) {
			return NextResponse.json(
				{
					message: `Product with id of ${params.id} does not exist`,
				},
				{ status: 404 }
			);
		}

		return NextResponse.json(product);
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
	} finally {
		await prisma.$disconnect();
	}
}

// export const GET = (req, { params }) => {
// 	try {
// 		const id = Number(params.id);
// 		if (!id) {
// 			return NextResponse.json(
// 				{
// 					message: `Invalid id`,
// 				},
// 				{ status: 400 }
// 			);
// 		}
// 		const result = findById(id);

// 		if (!result) {
// 			return NextResponse.json(
// 				{
// 					message: `Product with id of ${params.id} does not exist`,
// 				},
// 				{ status: 404 }
// 			);
// 		}

// 		return NextResponse.json(result);
// 	} catch (error) {
// 		const errorArray = error.toString().split(":");
// 		const errorType = errorArray[0] || "Unknown Error";
// 		const cause = errorArray[1] || "An unexpected error occurred";
// 		return NextResponse.json(
// 			{
// 				error: {
// 					message: cause,
// 					code: 500,
// 					cause: errorType,
// 				},
// 			},
// 			{ status: 500 }
// 		);
// 	}
// };
