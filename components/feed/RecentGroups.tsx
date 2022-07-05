import Avatar from "../global/Avatar";
import Button from "../global/Button";
import WhiteWrapper from "../global/WhiteWrapper";

type RecentGroupsprops = {
	accounts: {
		name: string;
		description: string;
	}[];
};

const RecentGroups = ({ accounts }: RecentGroupsprops) => {
	return (
		<WhiteWrapper>
			<header className='flex items-center justify-between font-epilogue'>
				<div
					title='Recent Event'
					className='font-semibold text-lg text-dark-900'>
					Recent Groups
				</div>
				<button type='button'>
					<img
						src='/assets/icons/layouts/more.svg'
						alt='see more'
						title='see more'
					/>
				</button>
			</header>
			<hr className='mb-5 mt-2' />
			<section className='space-y-2 font-epilogue'>
				{accounts?.map((account, i) => (
					<div key={account.name + i} className='bg-accents-light-blue p-4'>
						<div className='flex gap-3 mb-4'>
							<Avatar
								shape='square'
								name={account.name}
								size={48}
								// image='/assets/icons/layouts/avatar-2.png'
							/>
							<div className='w-[calc(100%-48px)]'>
								<div className='font-semibold text-dark-900'>
									{account.name}
								</div>
								<div className='text-sm text-dark-100'>
									{account.description}
								</div>
							</div>
						</div>
						<div className='flex items-center gap-5'>
							<Button className='w-full' size='sm' theme='outline'>
								Ignore
							</Button>
							<Button className='w-full' size='sm'>
								Join group
							</Button>
						</div>
					</div>
				))}
			</section>
		</WhiteWrapper>
	);
};

export default RecentGroups;

RecentGroups.defaultProps = {
	accounts: [
		{
			name: "Dentic group",
			description:
				"Brace for impact: the metaverse. Where the digital world is heading.",
		},
		{
			name: "Metaverse",
			description:
				"Brace for impact: the metaverse. Where the digital world is heading.",
		},
	],
};
