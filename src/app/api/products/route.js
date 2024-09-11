import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
	try {
		const products = await prisma.product.findMany();
		return new Response(JSON.stringify(products), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Error fetching products" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} finally {
		await prisma.$disconnect();
	}
}

// export const GET = (req, res) => {
// 	try {
// 		if (!data) {
// 			return NextResponse.json(
// 				{ message: "No data available" },
// 				{ status: 404 }
// 			);
// 		}

// 		return NextResponse.json(data);
// 	} catch (error) {
// 		console.error("Error handling GET request:", error);

// 		return NextResponse.json(
// 			{
// 				message: "An error occurred while processing your request.",
// 				cause: error.message || "Unknown error",
// 			},
// 			{ status: 500 }
// 		);
// 	}
// };
