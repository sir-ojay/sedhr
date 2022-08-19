import CommunicationNav from "./CommunicationNav";

type CommunicationWrapperProps = {
	children: React.ReactNode;
};

const CommunicationWrapper = ({ children }: CommunicationWrapperProps) => {
	return (
		<div className='grid grid-cols-6 gap-8'>
			<section className='col-span-2 space-y-6'>
				<CommunicationNav />
			</section>
			<section className='col-span-4 space-y-6'>{children}</section>
		</div>
	);
};

export default CommunicationWrapper;
