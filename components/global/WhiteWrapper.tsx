type WhiteWrapperProps = {
	children?: React.ReactNode;
	className?: string;
} & React.ComponentProps<"section">;

const WhiteWrapper = ({ children, className, ...rest }: WhiteWrapperProps) => {
	return (
		<section className={`bg-white p-5 rounded-xl ${className}`} {...rest}>
			{children}
		</section>
	);
};

export default WhiteWrapper;
