import Button from "@/components/global/Button";
import GoBackButton from "@/components/global/GoBackButton";

type CreateSnergiWrapperProps = {
	children: React.ReactNode;
	steps: {
		title: string;
		no: string;
	}[];
	step: any;
};

const CreateSnergiWrapper = ({
	children,
	steps,
	step,
}: CreateSnergiWrapperProps) => {
	return (
		<section>
			<div className='grid grid-cols-6 gap-8'>
				<section className='col-span-4'>
					<div className='flex items-center mb-8'>
						<GoBackButton />
						<div>
							<div className='font-epilogue capitalize font-semibold text-[20px] text-dark-900'>
								Create Sedher Snergi
							</div>
							<div className='text-dark-900'>
								collaborate with your follow connection
							</div>
						</div>
					</div>
					<section>{children}</section>
				</section>
				<section className='col-span-2'>
					{/* <Button
						theme='plain'
						icon='video'
						size='sm'
						className='w-[210px] h-fit py-3 bg-primary rounded-[5px] text-white'>
						Watch Tutorial
					</Button> */}

					<div className='mt-7 space-y-4'>
						{steps.map((_step, index) => (
							<div key={index} className='flex items-center gap-4'>
								<div
									className={`flex items-center justify-center ${
										step === _step.no.toString()
											? "bg-primary text-white"
											: step > _step.no.toString()
											? "bg-[#44BE9D] text-white"
											: "border border-dark-100 text-dark-100"
									} w-[58px] h-[58px] rounded-full`}>
									{step === _step.no.toString() ||
									step < _step.no.toString() ? (
										_step.no
									) : (
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M4 12L10 18L20 6'
												stroke='white'
												strokeWidth='4'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									)}
								</div>
								<div
									className={`font-medium ${
										step === _step.no.toString()
											? "text-primary"
											: step > _step.no.toString()
											? "text-dark-900"
											: "text-dark-100"
									}`}>
									{_step.title}
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</section>
	);
};

export default CreateSnergiWrapper;

CreateSnergiWrapper.defaultProps = {
	steps: [
		{
			title: "New Booking",
			no: 1,
		},
		{
			title: "Equipment Details",
			no: 2,
		},
		{
			title: "Event duration  and availability",
			no: 3,
		},
		{
			title: "Location",
			no: 4,
		},
		{
			title: "Payment Detail",
			no: 5,
		},
	],
};
