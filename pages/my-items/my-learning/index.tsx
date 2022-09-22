import WhiteWrapper from "@/components/global/WhiteWrapper";
import TrainingLearningCard from "@/components/my-items/TrainingLearningCard";
import MyItemsWrapper from "@/components/my-items/MyItemsWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { GetServerSideProps, NextPage } from "next";
import { requireAuthentication } from "hoc/requireAuthentication";

const MyLearning: NextPage = () => {
	return (
		<DefaultLayout title='Sedher | My item | My learning'>
			<MyItemsWrapper>
				<WhiteWrapper>
					<header className='flex items-center justify-between mb-9'>
						<div
							title='My training'
							className='font-semibold text-lg text-dark-900 font-epilogue'>
							My learning
						</div>
						<button type='button' className='flex items-center gap-3'>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M7.99967 2.66699C8.36786 2.66699 8.66634 2.96547 8.66634 3.33366V12.667C8.66634 13.0352 8.36786 13.3337 7.99967 13.3337C7.63148 13.3337 7.33301 13.0352 7.33301 12.667V3.33366C7.33301 2.96547 7.63148 2.66699 7.99967 2.66699Z'
									fill='#3772FF'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M2.66699 7.99967C2.66699 7.63148 2.96547 7.33301 3.33366 7.33301H12.667C13.0352 7.33301 13.3337 7.63148 13.3337 7.99967C13.3337 8.36786 13.0352 8.66634 12.667 8.66634H3.33366C2.96547 8.66634 2.66699 8.36786 2.66699 7.99967Z'
									fill='#3772FF'
								/>
							</svg>
							<span className='text-sm font-bold text-primary'>
								Add New Training
							</span>
						</button>
					</header>
					<section>
						<ul className='space-y-5'>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
								(training) => (
									<li key={training}>
										<TrainingLearningCard type='learning' />
									</li>
								)
							)}
						</ul>
					</section>
				</WhiteWrapper>
			</MyItemsWrapper>
		</DefaultLayout>
	);
};

export default MyLearning;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
