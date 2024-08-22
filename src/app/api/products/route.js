import { NextResponse } from "next/server";
import { data } from "./data";

export const GET = (req, res) => {
	return NextResponse.json(data);
};
