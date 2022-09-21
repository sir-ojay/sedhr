import GoBackButton from "@/components/global/GoBackButton";
import React from "react";

type CreateSynergiWrapperProps = {
	children: React.ReactNode;
	steps: {
		title: string;
		no: string;
	}[];
	step: any;
};
const CreateSynergiWrapper = ({
	children,
	steps,
	step,
}: CreateSynergiWrapperProps) => {
	return (
		<section>
			<div className='grid grid-cols-6 gap-8'>
				<section className='col-span-4'>
					<div className='flex items-center mb-8'>
						<GoBackButton />
						<div>
							<div className='font-epilogue capitalize font-semibold text-[20px] text-dark-900'>
								Create Sedher H2H Commerce
							</div>
							<div className='text-dark-900'>
								collaborate with your follow connection
							</div>
						</div>
					</div>
					<section>{children}</section>
				</section>
			</div>
		</section>
	);
};

export default CreateSynergiWrapper;
