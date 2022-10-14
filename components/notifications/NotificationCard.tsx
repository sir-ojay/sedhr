import Button from "../global/Button";

type NotificationCardProps = {
	index: number;
};

const NotificationCard = ({ index }: NotificationCardProps) => {
	return (
		<article
			className={`flex items-center pb-6 ${index !== 1 ? "pt-6" : ""} ${
				index !== 10 ? "border-b-2 boreder-[#B8C9C9]" : ""
			}`}>
			<div className='flex gap-6'>
				<svg
					width='64'
					height='64'
					viewBox='0 0 64 64'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g clipPath='url(#clip0_1818_72918)'>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M8 17.4922V45.9371L32.4321 60.6268L32.9992 59.7136L32.4321 32.1068L8.84006 17.5091L8 17.4922Z'
							fill='#449B82'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M56.6005 17.3594V46.205L32.4326 60.6277V32.1077L55.7152 17.3811L56.6005 17.3594Z'
							fill='#9BDB9C'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M32.3 3.20312L56.6 17.3588L32.4321 32.583L8 17.4924L32.3 3.20312Z'
							fill='#56CDAD'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M44.5054 14.5469L36.2866 19.4116V29.2305L28.052 24.2859L20.1338 28.9728V49.4956L28.3525 44.3989V33.352L37.1307 38.9556L44.5054 34.3825V14.5469Z'
							fill='white'
						/>
					</g>
					<defs>
						<clipPath id='clip0_1818_72918'>
							<rect
								width='48.6'
								height='57.6'
								fill='white'
								transform='translate(8 3.19922)'
							/>
						</clipPath>
					</defs>
				</svg>
				<p className='w-[calc(100%-64px)] max-w-[60%] text-dark-900 leading-[150%]'>
					As an Applied Doctor in the field of Consumer and Society, I am
					specializedin creating business opportunities by observing,
					analysing,researching and changing behaviour.
				</p>
			</div>
			<div>
				<Button className='w-[150px]' size='sm' theme='outline'>
					View event
				</Button>
			</div>
		</article>
	);
};

export default NotificationCard;
