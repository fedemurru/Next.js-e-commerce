export default function ContactForm() {
	return (
		<form action="/api/signup" method="POST" className="max-w-md mx-auto mt-8 ">
			<h2 className="text-2xl font-bold mb-4">Let’s sign you up</h2>

			<div className="grid grid-cols-2 gap-4 mb-4">
				<div>
					<label className="block text-sm font-medium text-gray-300">
						First Name
					</label>
					<input
						type="text"
						name="firstName"
						placeholder="John"
						className="mt-1 p-2 w-full border border-gray-300 rounded-md"
						required
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-300">
						Last Name
					</label>
					<input
						type="text"
						name="lastName"
						placeholder="Doe"
						className="mt-1 p-2 w-full border border-gray-300 rounded-md"
						required
					/>
				</div>
			</div>

			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-300">
					Email Address
				</label>
				<input
					type="email"
					name="email"
					placeholder="Work email or Personal email"
					className="mt-1 p-2 w-full border border-gray-300 rounded-md"
					required
				/>
			</div>

			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-300">
					Choose Password
				</label>
				<input
					type="password"
					name="password"
					placeholder="Minimum of 3 characters"
					className="mt-1 p-2 w-full border border-gray-300 rounded-md"
					required
				/>
			</div>

			<button
				type="submit"
				className="w-full bg-purple-500 text-white py-2 rounded-md text-lg font-semibold"
			>
				Sign up with Email
			</button>
		</form>
	);
}
