import Button from "@/components/global/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TrainingCard = () => {
	return (
		<Link href={"/my-items/my-training"}>
			<a>
				<div className='text-dark-100 text-sm mb-2'>
					Tomorrow - 10 July, 2021
				</div>
				<article className='flex items-center justify-between p-4 border-2 border-[#B8C9C9] rounded-[5px]'>
					<div className='flex items-center gap-4 '>
						<div className='h-10 w-10'>
							<Image
								width={40}
								height={40}
								layout='responsive'
								src='/assets/images/myTraining.png'
								alt=''
							/>
						</div>
						<div>
							<h4 className='font-semibold text-[#25324B]'>
								Adagio CME-CPD Training Services
							</h4>
							<div className='text-sm text-dark-100'>
								Host by:{" "}
								<Button tag='a' theme='secondary' className='font-medium'>
									Salami tayo
								</Button>
							</div>
						</div>
					</div>
					<div className='flex items-center gap-9'>
						<div>
							<div className='text-[#25324B] font-medium'>Course · 2h 10m</div>
							<div className='text-sm text-dark-100'>Online classes</div>
						</div>
						<button type='button' className='transform rotate-90'>
							<img
								src='/assets/icons/layouts/more.svg'
								alt='see more'
								title='see more'
							/>
						</button>
					</div>
				</article>
			</a>
		</Link>
	);
};

export default TrainingCard;
