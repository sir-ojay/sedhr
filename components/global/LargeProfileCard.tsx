import Avatar from "./Avatar";
import Button from "./Button";
import WhiteWrapper from "./WhiteWrapper";

type LargeProfileCardProps = {
	title: string;
	type: "event" | "group" | "experience";
};

const LargeProfileCard = ({ title }: LargeProfileCardProps) => {
	return (
		<WhiteWrapper title={title}>
			<article className='flex gap-6'>
				<Avatar name='Salami Tayo' size={80} />
				<div>
					<div className='space-y-2'>
						<div className='flex items-center justify-between'>
							<div className='font-semibold text-dark-900'>Salami Tayo</div>
							<Button
								icon='blue-plus'
								theme='plain'
								size='sm'
								className='text-primary'>
								Follow
							</Button>
						</div>
						<div className='flex items-center gap-2'>
							<div className='text-sm text-dark-100'>Physiotherapists</div>
							<svg
								width='4'
								height='4'
								viewBox='0 0 4 4'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<circle cx='2' cy='2' r='2' fill='#4C4475' />
							</svg>
							<div className='text-sm text-accents-brown'>HCP</div>
						</div>
						<p className='font-epilogue text-dark-900 leading-[160%]'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
							illo ducimus rem, necessitatibus quasi voluptatum nobis inventore
							molestiae deleniti in quae perferendis excepturi distinctio.
							Fugiat ut dolorem voluptas voluptatibus reprehenderit.
						</p>
					</div>
				</div>
			</article>
		</WhiteWrapper>
	);
};

export default LargeProfileCard;
