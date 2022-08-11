type StatusPillProps = {
	text: string;
	bg: string;
	textColor: string;
};

const StatusPill = ({ text, bg, textColor }: StatusPillProps) => {
	return (
		<div
			className='text-center px-3 py-2 rounded'
			style={{
				backgroundColor: bg,
				color: textColor,
			}}>
			{text}
		</div>
	);
};

export default StatusPill;
