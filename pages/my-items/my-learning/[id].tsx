import Button from "@/components/global/Button";
import GoBackButton from "@/components/global/GoBackButton";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { NextPage } from "next";
import Image from "next/image";

type SingleTrainingProps = {
	trainingInfo: {
		key: string;
		value: string;
	}[];
	categories: {
		label: string;
		colour: string;
	}[];
};

const SingleTraining = ({ trainingInfo, categories }: SingleTrainingProps) => {
	return (
		<DefaultLayout title='Sedher | Adagio CME-CPD Training Services'>
			<GoBackButton label='My Learning' />
			<section className='mt-10 space-y-6'>
				<WhiteWrapper>
					<div className='flex items-center gap-4'>
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
							<h4 className='font-semibold font-clash text-[32px] text-dark-900'>
								Adagio CME-CPD Training Services
							</h4>
						</div>
					</div>
				</WhiteWrapper>

				<WhiteWrapper>
					<div className='flex flex-col lg:grid lg:grid-cols-9 gap-8'>
						<div className='col-span-3'>
							<article>
								<h5 className='font-clash font-semibold text-2xl text-dark-900'>
									About this Learning
								</h5>
								<div className='mt-6 space-y-6'>
									{trainingInfo.map((info) => (
										<div
											key={info.key}
											className='flex items-center justify-between font-epilogue'>
											<div className='text-dark-100'>{info.key}</div>
											<div className='text-dark-900 font-semibold'>
												{info.value}
											</div>
										</div>
									))}
								</div>
								<hr className='my-6' />
								<Button className='w-full'>Enroll</Button>
							</article>
							<hr className='my-10' />
							<section>
								<h5 className='font-clash font-semibold text-2xl text-dark-900'>
									Categories
								</h5>
								<div className='flex items-center flex-wrap gap-2 mt-6'>
									{categories.map((category, i) => (
										<div
											key={category.label + i}
											className='flex items-center justify-center py-[6px] px-[10px] rounded-[80px] font-semibold text-sm'
											style={{
												border: `1px solid ${category.colour}`,
												color: category.colour,
											}}>
											{category.label}
										</div>
									))}
								</div>
							</section>
						</div>
						<div className='col-span-6 space-y-10'>
							<article className='space-y-4'>
								<h5 className='font-clash font-semibold text-2xl text-dark-900'>
									Description
								</h5>
								<p className='font-epilogue text-dark-100 leading-[160%]'>
									We are improving the Nigerian Healthcare System to ensure you
									are able to make the best healthcare decisions for you, your
									loved ones and your futureeffective ways to engage the
									community and incentivize others to engage on our channels.
								</p>
							</article>
							<div className='space-y-4'>
								<h5 className='font-clash font-semibold text-2xl text-dark-900'>
									Requirement
								</h5>
								<ul className='space-y-2'>
									{[1, 2, 3, 4, 5].map((item, index) => (
										<li
											key={item + index}
											className='font-epilogue text-dark-100 leading-[160%] flex'>
											<svg
												className='mr-2'
												width='20'
												height='20'
												viewBox='0 0 20 20'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M9.99984 3.33366C6.31794 3.33366 3.33317 6.31843 3.33317 10.0003C3.33317 13.6822 6.31794 16.667 9.99984 16.667C13.6817 16.667 16.6665 13.6822 16.6665 10.0003C16.6665 6.31843 13.6817 3.33366 9.99984 3.33366ZM1.6665 10.0003C1.6665 5.39795 5.39746 1.66699 9.99984 1.66699C14.6022 1.66699 18.3332 5.39795 18.3332 10.0003C18.3332 14.6027 14.6022 18.3337 9.99984 18.3337C5.39746 18.3337 1.6665 14.6027 1.6665 10.0003Z'
													fill='#56CDAD'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M13.0891 7.74408C13.4145 8.06951 13.4145 8.59715 13.0891 8.92259L9.75576 12.2559C9.43032 12.5814 8.90269 12.5814 8.57725 12.2559L6.91058 10.5893C6.58514 10.2638 6.58514 9.73618 6.91058 9.41074C7.23602 9.08531 7.76366 9.08531 8.08909 9.41074L9.1665 10.4882L11.9106 7.74408C12.236 7.41864 12.7637 7.41864 13.0891 7.74408Z'
													fill='#56CDAD'
												/>
											</svg>
											<span className='w-[calc(100%-20px)]'>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Posuere morbi molestie nibh.
											</span>
										</li>
									))}
								</ul>
							</div>
							<div role='address' className='space-y-4'>
								<h5 className='font-clash font-semibold text-2xl text-dark-900'>
									Location
								</h5>
								<div className='space-y-2'>
									<div className='font-epilogue text-dark-100 leading-[160%] flex'>
										<svg
											className='mr-2'
											width='20'
											height='20'
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M9.99984 3.33366C6.31794 3.33366 3.33317 6.31843 3.33317 10.0003C3.33317 13.6822 6.31794 16.667 9.99984 16.667C13.6817 16.667 16.6665 13.6822 16.6665 10.0003C16.6665 6.31843 13.6817 3.33366 9.99984 3.33366ZM1.6665 10.0003C1.6665 5.39795 5.39746 1.66699 9.99984 1.66699C14.6022 1.66699 18.3332 5.39795 18.3332 10.0003C18.3332 14.6027 14.6022 18.3337 9.99984 18.3337C5.39746 18.3337 1.6665 14.6027 1.6665 10.0003Z'
												fill='#56CDAD'
											/>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M13.0891 7.74408C13.4145 8.06951 13.4145 8.59715 13.0891 8.92259L9.75576 12.2559C9.43032 12.5814 8.90269 12.5814 8.57725 12.2559L6.91058 10.5893C6.58514 10.2638 6.58514 9.73618 6.91058 9.41074C7.23602 9.08531 7.76366 9.08531 8.08909 9.41074L9.1665 10.4882L11.9106 7.74408C12.236 7.41864 12.7637 7.41864 13.0891 7.74408Z'
												fill='#56CDAD'
											/>
										</svg>
										<div className='w-[calc(100%-20px)]'>
											<span className='font-medium text-dark-900'>
												zoom link:
											</span>{" "}
											<Button tag='a' href='/'>
												US927US927&sxsrf=ALiCzsYzECuFh06TSLQUfXcCu1Nu61pwWQ:16
											</Button>
										</div>
									</div>

									<div className='font-epilogue text-dark-100 leading-[160%] flex'>
										<svg
											className='mr-2'
											width='20'
											height='20'
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M9.99984 3.33366C6.31794 3.33366 3.33317 6.31843 3.33317 10.0003C3.33317 13.6822 6.31794 16.667 9.99984 16.667C13.6817 16.667 16.6665 13.6822 16.6665 10.0003C16.6665 6.31843 13.6817 3.33366 9.99984 3.33366ZM1.6665 10.0003C1.6665 5.39795 5.39746 1.66699 9.99984 1.66699C14.6022 1.66699 18.3332 5.39795 18.3332 10.0003C18.3332 14.6027 14.6022 18.3337 9.99984 18.3337C5.39746 18.3337 1.6665 14.6027 1.6665 10.0003Z'
												fill='#56CDAD'
											/>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M13.0891 7.74408C13.4145 8.06951 13.4145 8.59715 13.0891 8.92259L9.75576 12.2559C9.43032 12.5814 8.90269 12.5814 8.57725 12.2559L6.91058 10.5893C6.58514 10.2638 6.58514 9.73618 6.91058 9.41074C7.23602 9.08531 7.76366 9.08531 8.08909 9.41074L9.1665 10.4882L11.9106 7.74408C12.236 7.41864 12.7637 7.41864 13.0891 7.74408Z'
												fill='#56CDAD'
											/>
										</svg>
										<div className='w-[calc(100%-20px)]'>
											<span className='font-medium text-dark-900'>Phone:</span>{" "}
											<Button tag='a' href='tel:07084457688' theme='secondary'>
												07084457688
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</WhiteWrapper>
			</section>
		</DefaultLayout>
	);
};

export default SingleTraining;

SingleTraining.defaultProps = {
	trainingInfo: [
		{
			key: "Service Option",
			value: "On-site Classes",
		},
		{
			key: "Hours",
			value: "4 hours",
		},
		{
			key: "Time",
			value: "11am - 3pm",
		},
		{
			key: "Date",
			value: "12 - 23 May",
		},
		{
			key: "Amount",
			value: "NGN 20000",
		},
	],
	categories: [
		{
			label: "First Aid Kit",
			colour: "#FFD03A",
		},
		{
			label: "First Aid Kit",
			colour: "#FF3956",
		},
		{
			label: "First Aid Kit",
			colour: "#1AD48D",
		},
	],
};
