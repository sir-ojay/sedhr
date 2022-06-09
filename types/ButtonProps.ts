export type ButtonProps = {
	loading?: boolean;
	disabled?: boolean;
	theme: "primary" | "secondary" | "plain" | "outline";
	tag?: "button" | "link";
	isExternal?: boolean;
	outline?: boolean;
	icon?: string;
	link?: string;
	size?: "sm" | "md" | "lg" | "xl";
	underline?: boolean;
	className?: string;
	children: string;
} & Omit<React.ComponentProps<"button">, "children">;
