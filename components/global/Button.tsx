import { ButtonProps } from "@/types/ButtonProps";
import Image from "next/image";
import React from "react";
import { ClipLoader } from "react-spinners";

const Button: React.FC<ButtonProps> = ({
	loading = false,
	disabled,
	theme = "primary",
	icon = null,
	link = null,
	size = "md",
	underline = false,
	outline = false,
	isExternal = false,
	children,
	className,
	...rest
}) => {
	const buttonTheme = (theme: string) => {
		switch (theme) {
			case "primary":
				return "bg-primary text-white";
			case "outline":
				return `bg-transparent text-secondary border-2 border-[#E2D3CF]`;
		}
	};

	const buttonSize = (size: string) => {
		switch (size) {
			case "sm":
				return "px-4 py-2";
			case "md":
				return "px-6 py-3";
			case "lg":
				return "px-8 py-4";
			case "xl":
				return "px-10 py-5";
			default:
				return "px-6 py-3";
		}
	};

	const iconSize = (icon: string) => {
		switch (icon) {
			case "sm":
				return 20;
			case "md":
				return 24;
			case "lg":
				return 32;
			case "xl":
				return 36;
			default:
				return 24;
		}
	};

	const iconColor = (theme: string) => {
		switch (theme) {
			case "primary":
				return "#fff";
			case "outline":
				return "#7F4433";
			default:
				return "#fff";
		}
	};
	return (
		<button
			disabled={disabled || loading}
			className={`flex items-center font-epilogue justify-center transition-all rounded-[5px] hover:brightness-90 disabled:brightness-[60%] ease-in text-center gap-4 font-bold disabled:cursor-not-allowed ${buttonTheme(
				theme
			)} ${buttonSize(size)} ${underline ? "underline" : ""} ${className}`}
			{...rest}>
			<ClipLoader color={iconColor(theme)} loading={loading} size={20} />
			{icon && (
				<Image
					src={`/assets/icons/${icon}.svg`}
					width={iconSize(size)}
					height={iconSize(size)}
				/>
			)}
			{children}
		</button>
	);
};

export default Button;
