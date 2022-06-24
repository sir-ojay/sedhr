type WhiteWrapperProps = {
	children?: React.ReactNode;
};

const WhiteWrapper = ({ children }: WhiteWrapperProps) => {
	return <section className='bg-white p-5 rounded-xl'>{children}</section>;
};

export default WhiteWrapper;
