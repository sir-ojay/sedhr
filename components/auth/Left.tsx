import Image from "next/image";
import React from "react";

const Left = () => {
	return (
		<>
			<div className='bg-[#E7F6FD] w-[45%] h-full relative overflow-hidden'>
				<div className='ml-[62px] mt-[42px]'>
					<Image
						src='/assets/icons/logo.svg'
						width={125}
						height={53}
						alt='sedher'
					/>
				</div>
				<div className='absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-[450px]'>
					<Image
						src='/assets/images/auth/medical-professional.png'
						width={528}
						height={652}
						alt='medical-professional'
					/>
				</div>
				<div className='absolute right-[50px] top-[60px]'>
					<Image
						src='/assets/images/auth/male-medical-professional.png'
						width={142}
						height={142}
						alt='male-medical-professional'
					/>
				</div>
				<div className='bg-white p-[20px] absolute top-[140px] left-8'>
					<div className='w-[50px] h-[40px]'>{/* <Image/> */}</div>
					<div className='text-dark-900 text-[20px] font-bold'>100K+</div>
					<div className='text-dark-100 leading-[150%]'>
						Connect with people
					</div>
				</div>
				<div className='bg-white p-[20px] absolute bottom-8 right-8 w-[300px] h-[200px]'>
					<div className='text-[#616161] text-sm font-semibold'>
						Adam Sandler
					</div>
					<div className='text-dark-100 text-sm leading-[150%]'>
						Medical Doctor
					</div>
					<div className='flex justify-between gap-2 mt-5'>
						<div className='w-8'>
							<Image
								src='/assets/icons/brown-quotes.svg'
								alt='quotes'
								width={32}
								height={32}
							/>
						</div>
						<div className='w-[215px] font-epilogue font-semibold leading-[160%]'>
							“Great platform to connect and collabo with professional on one
							Digtal platform”
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Left;
