type WhiteWrapperProps = {
	children?: React.ReactNode;
	className?: string;
	title?: string;
	status?: string;
} & React.ComponentProps<"section">;

const WhiteWrapper = ({
	children,
	className,
	title,
	status,
	...rest
}: WhiteWrapperProps) => {
	return (
		<section className={`bg-white p-5 rounded-xl ${className}`} {...rest}>
			{(title || status) && (
				<header className='flex items-center justify-between'>
					{title && (
						<h5 className='font-epilogue capitalize font-semibold text-[20px] text-dark-900 mb-4'>
							{title}
						</h5>
					)}
					{status && (
						<h6 className='mb-4 py-2 px-5 border rounded font-bold font-epilogue text-primary'>
							{status}
						</h6>
					)}
				</header>
			)}
			{children}
		</section>
	);
};

export default WhiteWrapper;
