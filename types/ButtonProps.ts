export type ButtonProps = {
	// label: string;
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
} & React.ComponentProps<"button">;
