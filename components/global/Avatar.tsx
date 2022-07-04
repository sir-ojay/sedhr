import Image from "next/image";
import { useState } from "react";

type AvatarProps = {
	image?: string;
	name?: string;
	size: number;
	rounded?: boolean;
	border?: boolean;
};

const Avatar = ({
	image,
	name,
	size,
	rounded = true,
	border = false,
}: AvatarProps) => {
	// function to get random colours for avatar background
	const getRandomColour = () => {
		const letters = "0123456789ABCDEF";
		let colour = "#";
		for (let i = 0; i < 6; i++) {
			colour += letters[Math.floor(Math.random() * 16)];
		}
		return colour;
	};

	const [colour] = useState(getRandomColour());

	// function to get text colour based on backgroud colour
	const getTextColour = (backgroundColour: string) => {
		const r = parseInt(backgroundColour.substring(1, 3), 16);
		const g = parseInt(backgroundColour.substring(3, 5), 16);
		const b = parseInt(backgroundColour.substring(5, 7), 16);
		const brightness = (r * 299 + g * 587 + b * 114) / 1000;
		return brightness > 125 ? "#000" : "#fff";
	};

	return (
		<div>
			{image ? (
				<Image
					width={size}
					height={size}
					src={image}
					alt='Salami Tayo profile'
					title='Salami Tayo Profile'
					className={`${rounded ? "rounded-full" : "rounded-xl"} ${
						border ? "border-2 border-[#B8C9C9]" : ""
					}`}
				/>
			) : (
				<div>
					<div
						className={`text-2xl font-semibold text-dark-900 flex items-center justify-center ${
							rounded ? "rounded-full" : "rounded-xl"
						}`}
						style={{
							backgroundColor: colour,
							color: getTextColour(colour),
							width: `${size}px`,
							height: `${size}px`,
						}}>
						{/* function to get the initials of a name */}
						{name &&
							name
								.split(" ")
								.map((n) => n[0])
								.join("")}
					</div>
				</div>
			)}
		</div>
	);
};

export default Avatar;
