type LabelValueProps = {
	label: string;
	value: string;
	info?: string;
	orientation?: "horizontal" | "vertical";
	labelClassName?: string;
	valueClassName?: string;
};

const LabelValue = ({
	label,
	value,
	info,
	orientation = "horizontal",
	labelClassName,
	valueClassName,
}: LabelValueProps) => {
	return (
		<div
			className={`flex  justify-between ${
				orientation === "horizontal"
					? "flex-row items-center"
					: "flex-col items-start"
			}`}>
			<div
				className={`flex gap-2 items-center text-[#515B6F] font-normal font-archivo ${labelClassName}`}>
				{label}
				{info && (
					<svg
						className='cursor-pointer'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z'
							fill='#3772FF'
						/>
					</svg>
				)}
			</div>
			<div
				className={`font-archivo font-medium text-base text-[#101C1D] ${valueClassName}`}>
				{value}
			</div>
		</div>
	);
};

export default LabelValue;
