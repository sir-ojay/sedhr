import React from "react";
import Input from "@/components/global/Input";

const DefaultLayoutHeader = () => {
	return (
		<header className='pb-8 flex justify-between bg-white py-8 pr-9 items-center fixed top-0 right-0 w-[calc(100%-272px)] z-10'>
			<div className='max-w-[570px] w-full'>
				<Input type='search' placeholder='Search...' />
			</div>
			<div className='flex justify-between items-center gap-9 bg-tertiary p-[10px] rounded-xl cursor-pointer'>
				<button type='button'>
					<img
						src='/assets/icons/layouts/more.svg'
						alt='see more'
						title='see more'
					/>
				</button>
				<div className='flex items-center justify-between gap-3'>
					<div className='text-right font-epilogue'>
						<div className='font-semibold text-lg text-dark-900'>
							Salami Tayo
						</div>
						<div className='text-sm text-dark-100'>Patient care centres</div>
					</div>
					<div className='h-12 w-12'>
						<img
							src='/assets/icons/layouts/profile.png'
							alt='Salami Tayo profile'
							title='Salami Tayo Profile'
						/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default DefaultLayoutHeader;
