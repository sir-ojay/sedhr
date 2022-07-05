import Avatar from "./Avatar";
import Button from "./Button";
import WhiteWrapper from "./WhiteWrapper";

type LargeProfileCardProps = {
	title: string;
	avatarShape?: "circle" | "square";
	type:
		| "event"
		| "group"
		| "experience"
		| "education"
		| "licenses-certifications";
};

const LargeProfileCard = ({
	title,
	type,
	avatarShape = "square",
}: LargeProfileCardProps) => {
	return (
		<WhiteWrapper title={title}>
			{(type === "event" || type === "group") && (
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
								illo ducimus rem, necessitatibus quasi voluptatum nobis
								inventore molestiae deleniti in quae perferendis excepturi
								distinctio. Fugiat ut dolorem voluptas voluptatibus
								reprehenderit.
							</p>
						</div>
					</div>
				</article>
			)}

			{(type == "experience" ||
				type === "education" ||
				type === "licenses-certifications") && (
				<>
					{[1, 2].map((i) => (
						<article
							key={i}
							className={`flex gap-6 py-6 ${
								i !== 2 ? "border-b border-[#e0dada]" : ""
							}`}>
							<Avatar name='Medical Doctor' size={80} shape={avatarShape} />
							<div>
								<div className='space-y-2'>
									<div className='font-semibold text-title'>Medical Doctor</div>
									<div className='flex items-center gap-2'>
										<div className='text-sm text-title'>Eko hospital</div>
										<svg
											width='4'
											height='4'
											viewBox='0 0 4 4'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<circle cx='2' cy='2' r='2' fill='#4C4475' />
										</svg>
										<div className='text-sm text-dark-100'>Full-Time</div>
										<svg
											width='4'
											height='4'
											viewBox='0 0 4 4'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<circle cx='2' cy='2' r='2' fill='#4C4475' />
										</svg>
										<div className='text-sm text-dark-100'>
											Jun 2019 - Present
										</div>
									</div>
									<div className='text-sm text-dark-100'>Lagos ikeja</div>
									<p className='font-epilogue text-title leading-[160%]'>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Veniam illo ducimus rem, necessitatibus quasi voluptatum
										nobis inventore molestiae deleniti in quae perferendis
										excepturi distinctio. Fugiat ut dolorem voluptas
										voluptatibus reprehenderit.
									</p>
								</div>
							</div>
						</article>
					))}
					<div className='flex justify-center mt-5'>
						<Button
							tag='a'
							theme='secondary'
							underline={false}
							className='font-semibold'>
							Show 3 more experiences
						</Button>
					</div>
				</>
			)}
		</WhiteWrapper>
	);
};

export default LargeProfileCard;
