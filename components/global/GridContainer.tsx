type GridContainerProps = {
	grid: number;
	children: React.ReactNode;
};

const GridContainer = ({ grid, children }: GridContainerProps) => {
	return (
		<section
			className={`grid gap-8 ${
				grid === 2
					? "grid-cols-2"
					: grid === 3
					? "grid-cols-3"
					: grid === 4
					? "grid-cols-4"
					: grid === 5
					? "grid-cols-5"
					: "grid-cols-1"
			}`}>
			{children}
		</section>
	);
};

export default GridContainer;
