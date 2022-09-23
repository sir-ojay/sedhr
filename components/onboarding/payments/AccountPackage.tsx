import Button from "@/components/global/Button";
import Router from "next/router";

const AccountPackage = () => {
	const goto = () => Router.push("/onboarding/verification?step=1");

	return (
		<div className='w-[340px] bg-white p-8'>
			<h4 className='text-lg font-semibold font-epilogue text-primary'>
				Starter
			</h4>
			<div className='text-neutral-60 font-medium font-epilogue'>
				Custom Domain
			</div>
			<div className='text-semibold text-3xl md:text-4xl font-epilogue text-title my-[18px]'>
				₦3,000
				<span className='text-lg md:text-2xl text-secondary font-semibold'>
					/m
				</span>
			</div>
			<Button size='sm' className='w-full' onClick={goto}>
				Start my free Trial
			</Button>
			<div className='mt-[18px] p-4'>
				<div className='font-semibold text-sm text-secondary mb-[17px]'>
					This plan includes
				</div>
				<div className='space-y-4'>
					{[1, 2, 3, 4, 5, 6].map((item) => (
						<div key={item} className='flex items-center gap-2'>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M6 11.5172C6 11.6953 6.21543 11.7846 6.34142 11.6586L9.85858 8.14142C9.93668 8.06332 9.93668 7.93668 9.85858 7.85858L6.34142 4.34142C6.21543 4.21543 6 4.30466 6 4.48284L6 11.5172Z'
									fill='#11747D'
									stroke='#11747D'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
							<span className='text-sm text-dark-100'>unlimited traffic</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AccountPackage;
