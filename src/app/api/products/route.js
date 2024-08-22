import { NextResponse } from "next/server";

const data = [
	{
		id: 1,
		name: "iPhone 14 Pro",
		description:
			"The iPhone 14 Pro features a 6.1-inch OLED display, A16 Bionic chip, and a triple-camera system with a 48MP main sensor.",
	},
	{
		id: 2,
		name: "Samsung Galaxy S23",
		description:
			"The Samsung Galaxy S23 comes with a 6.2-inch Dynamic AMOLED display, Snapdragon 8 Gen 2 processor, and a triple-camera setup.",
	},
	{
		id: 3,
		name: "Google Pixel 7",
		description:
			"The Google Pixel 7 offers a 6.3-inch OLED display, Google Tensor G2 chip, and a dual-camera system with advanced AI capabilities.",
	},
	{
		id: 4,
		name: "OnePlus 11",
		description:
			"The OnePlus 11 features a 6.7-inch Fluid AMOLED display, Snapdragon 8 Gen 2 processor, and a Hasselblad-tuned triple-camera system.",
	},
	{
		id: 5,
		name: "Xiaomi 13 Pro",
		description:
			"The Xiaomi 13 Pro comes with a 6.73-inch AMOLED display, Snapdragon 8 Gen 2 chipset, and a Leica-branded triple-camera setup.",
	},
];

const findById = (id) => {
	return data.find((el) => el.id === id);
};

export function GET(req, { params }) {
	// const id = Number(params.id);
	// const result = findById(id);

	return NextResponse.json(data);
}
