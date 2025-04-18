import React from "react";

export type ButtonProps = {
	type?: "button" | "submit" | "reset";
	loading?: boolean;
	disabled?: boolean;
	theme?: "primary" | "secondary" | "plain" | "outline";
	tag?: "button" | "a";
	isExternal?: boolean;
	outline?: boolean;
	icon?: string;
	iconBlue?: string;
	href?: string;
	size?: "sm" | "md" | "lg" | "xl";
	underline?: boolean;
	className?: string;
	children?: any;
} & Omit<React.ComponentProps<"button">, "children"> &
	Omit<React.ComponentProps<"a">, "children">;
