import Button from "../global/Button";
import WhiteWrapper from "../global/WhiteWrapper";

type YouMightKnowprops = {
	accounts: {
		name: string;
		description: string;
		accountType: string;
	}[];
};

const YouMightKnow = ({ accounts }: YouMightKnowprops) => {
	return (
		<WhiteWrapper>
			<header className='flex items-center justify-between font-epilogue'>
				<div
					title='You Might Know'
					className='font-semibold text-lg text-dark-900'>
					You Might Know
				</div>
				<Button
					title='See All'
					theme='plain'
					className='text-secondary text-sm font-bold'>
					See All
				</Button>
			</header>
			<hr className='mb-5 mt-2' />
			<section className='space-y-2 font-epilogue'>
				{accounts?.map((account, i) => (
					<div key={account.name + i} className='bg-accents-light-blue p-4'>
						<div className='flex gap-3 mb-4'>
							<div className='h-12 w-12'>
								<img
									src='/assets/icons/layouts/profile.png'
									alt='Salami Tayo profile'
									title='Salami Tayo Profile'
								/>
							</div>
							<div>
								<div className='font-semibold text-dark-900'>
									{account.name}
								</div>
								<div className='text-sm text-dark-100'>
									{account.description}
								</div>
								<div className='text-sm text-accents-brown'>
									{account.accountType}
								</div>
							</div>
						</div>
						<div className='flex items-center gap-5'>
							<Button className='w-full' size='sm' theme='outline'>
								Ignore
							</Button>
							<Button className='w-full' size='sm'>
								Follow
							</Button>
						</div>
					</div>
				))}
			</section>
		</WhiteWrapper>
	);
};

export default YouMightKnow;

YouMightKnow.defaultProps = {
	accounts: [
		{
			name: "susan adebambo",
			description: "Medical Doctor at Eko hostpital",
			accountType: "HCP",
		},
		{
			name: "Thomas Clinic",
			description: "Dental clinics ",
			accountType: "Healthcare company",
		},
	],
};
