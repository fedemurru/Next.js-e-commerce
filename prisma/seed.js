const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
	await prisma.product.createMany({
		data: [
			{
				id: 1,
				name: "iPhone 14 Pro",
				price: "$699",
				description:
					"The iPhone 14 Pro features a 6.1-inch OLED display, A16 Bionic chip, and a triple-camera system with a 48MP main sensor.",
			},
			{
				id: 2,
				name: "Samsung Galaxy S23",
				price: "$299",
				description:
					"The Samsung Galaxy S23 comes with a 6.2-inch Dynamic AMOLED display, Snapdragon 8 Gen 2 processor, and a triple-camera setup.",
			},
			{
				id: 3,
				name: "Google Pixel 7",
				price: "$399",
				description:
					"The Google Pixel 7 offers a 6.3-inch OLED display, Google Tensor G2 chip, and a dual-camera system with advanced AI capabilities.",
			},
			{
				id: 4,
				name: "OnePlus 11",
				price: "$499",
				description:
					"The OnePlus 11 features a 6.7-inch Fluid AMOLED display, Snapdragon 8 Gen 2 processor, and a Hasselblad-tuned triple-camera system.",
			},
			{
				id: 5,
				name: "Xiaomi 13 Pro",
				price: "$199",
				description:
					"The Xiaomi 13 Pro comes with a 6.73-inch AMOLED display, Snapdragon 8 Gen 2 chipset, and a Leica-branded triple-camera setup.",
			},
			{
				id: 6,
				name: "Sony Xperia 1 IV",
				price: "$1,199",
				description:
					"The Sony Xperia 1 IV offers a 6.5-inch 4K OLED display, Snapdragon 8 Gen 1 processor, and a versatile triple-camera system with ZEISS optics.",
			},
			{
				id: 7,
				name: "Oppo Find X5 Pro",
				price: "$899",
				description:
					"The Oppo Find X5 Pro features a 6.7-inch AMOLED display, Snapdragon 8 Gen 1 processor, and a Hasselblad-tuned camera system with a 50MP main sensor.",
			},
		],
	});
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
