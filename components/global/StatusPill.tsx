type StatusPillProps = {
	text: string;
	bg: string;
	textColor: string;
	statusStyle?: string;
	showIcon?: string;
};

const StatusPill = ({
	text,
	bg,
	textColor,
	statusStyle,
	showIcon,
}: StatusPillProps) => {
	return (
		<div
			className={`text-center  px-3 py-2 rounded ${statusStyle}`}
			style={{
				backgroundColor: bg,
				color: textColor,
			}}>
			{text}

			{showIcon && <img src='/assets/icons/more.svg' alt={text} title={text} />}
		</div>
	);
};

export default StatusPill;
