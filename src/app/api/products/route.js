import { NextResponse } from "next/server";
import { data } from "./data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
	if (req.method === "GET") {
		const users = await prisma.user.findMany();
		res.json(users);
		console.log(users);
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
