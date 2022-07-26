import Button from "@/components/global/Button";
import Link from "next/link";
import Avatar from "../global/Avatar";

type TrainingLearningCardProps = {
	type: "training" | "learning";
};

const TrainingLearningCard = ({ type }: TrainingLearningCardProps) => {
	return (
		<Link href={`/my-items/my-${type}/Adagio-CME-CPD-Training-Services`}>
			<a>
				<div className='text-dark-100 text-sm mb-2'>
					Tomorrow - 10 July, 2021
				</div>
				<article className='flex items-center justify-between p-4 border-2 border-[#B8C9C9] rounded-[5px]'>
					<div className='flex items-center gap-4 '>
						<Avatar
							shape='square'
							image='/assets/images/myTraining.png'
							name='Adagio Training Services'
							size={40}
						/>
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

export default TrainingLearningCard;
