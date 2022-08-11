import Image from "next/image";
import React from "react";

const ConversationBottom = () => {
	return (
		<div>
			<div className='flex items-center mt-28 w-full gap-4 py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px]'>
				<div>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<g opacity='0.5'>
							<path
								d='M14.9997 7.00045L8.4997 13.5005C8.10188 13.8983 7.87838 14.4378 7.87838 15.0005C7.87838 15.5631 8.10188 16.1026 8.4997 16.5005C8.89753 16.8983 9.43709 17.1218 9.9997 17.1218C10.5623 17.1218 11.1019 16.8983 11.4997 16.5005L17.9997 10.0005C18.7954 9.2048 19.2423 8.12567 19.2423 7.00045C19.2423 5.87523 18.7954 4.7961 17.9997 4.00045C17.2041 3.2048 16.1249 2.75781 14.9997 2.75781C13.8745 2.75781 12.7954 3.2048 11.9997 4.00045L5.4997 10.5005C4.30623 11.6939 3.63574 13.3126 3.63574 15.0005C3.63574 16.6883 4.30623 18.307 5.4997 19.5005C6.69318 20.6939 8.31188 21.3644 9.9997 21.3644C11.6875 21.3644 13.3062 20.6939 14.4997 19.5005L20.9997 13.0005'
								stroke='#25324B'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</g>
					</svg>
				</div>
				<input
					className=' focus:border-primary outline-none w-full'
					type='text'
					placeholder='Reply message'
				/>
				<img src='/assets/icons/emoji.svg' alt='emoji' title='emoji' />
				<svg
					width='73'
					height='40'
					viewBox='0 0 73 40'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<rect width='73' height='40' fill='#3772FF' />
					<g clip-path='url(#clip0_1884_192682)'>
						<path
							d='M31.6975 20.1316L36.4992 19.9983'
							stroke='white'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M44.6619 20.1316L30.2251 26.9081C30.1429 26.9386 30.0535 26.9449 29.9678 26.9262C29.8821 26.9075 29.8035 26.8646 29.7414 26.8025C29.6794 26.7404 29.6364 26.6619 29.6177 26.5761C29.599 26.4904 29.6053 26.4011 29.6359 26.3188L31.6983 20.1316L29.6359 13.9444C29.6053 13.8622 29.599 13.7728 29.6177 13.6871C29.6364 13.6014 29.6794 13.5228 29.7414 13.4607C29.8035 13.3987 29.882 13.3557 29.9678 13.337C30.0535 13.3183 30.1429 13.3246 30.2251 13.3552L44.6619 20.1316Z'
							stroke='white'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</g>
					<defs>
						<clipPath id='clip0_1884_192682'>
							<rect
								width='20'
								height='20'
								fill='white'
								transform='translate(26.5 10)'
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
		</div>
	);
};

export default ConversationBottom;
