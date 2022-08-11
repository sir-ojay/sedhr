import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import RFPCard from "@/components/collaboration/rfp/RFPCard";
import Button from "@/components/global/Button";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";

const create = () => {
	return (
		<DefaultLayout title='Sedher | Collaboration | create RFP'>
			<CollaborationWrapper showHeader={false}>
				<WhiteWrapper className='flex items-center justify-between w-full'>
					<div
						title='Request for Proposal'
						className='font-semibold text-lg text-dark-900 w-full'>
						Request for Proposal
					</div>
				</WhiteWrapper>

				<div className='grid grid-cols-6 gap-8'>
					<section className='col-span-2 space-y-6'>
						<div className='flex items-center gap-3'>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-primary bg-tertiary'>
								All
							</Button>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
								Product RFP
							</Button>
							<Button
								theme='plain'
								className='border-2 border-[#B8C9C9] rounded-full text-[#4C4475]'>
								Service RFP
							</Button>
						</div>

						<section className='space-y-8'>
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
								(card) => (
									<RFPCard key={card} type='Product' />
								)
							)}
						</section>
					</section>
				</div>
			</CollaborationWrapper>
		</DefaultLayout>
	);
};

export default create;
