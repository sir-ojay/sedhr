type WhiteWrapperProps = {
	children?: React.ReactNode;
	className?: string;
	title?: string;
} & React.ComponentProps<"section">;

const WhiteWrapper = ({
	children,
	className,
	title,
	...rest
}: WhiteWrapperProps) => {
	return (
		<section className={`bg-white p-5 rounded-xl ${className}`} {...rest}>
			<header>
				{title && (
					<h5 className='font-epilogue font-semibold text-[20px] text-dark-900 mb-4'>
						{title}
					</h5>
				)}
			</header>
			{children}
		</section>
	);
};

export default WhiteWrapper;
