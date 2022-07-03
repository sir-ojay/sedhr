import SedherUniverseNav from "./SedherUniverseNav";

type SedherUniverseWrapperProps = {
	children: React.ReactNode;
};

const SedherUniverseWrapper = ({ children }: SedherUniverseWrapperProps) => {
	return (
		<div className='grid grid-cols-6 gap-8'>
			<section className='col-span-2 space-y-6'>
				<SedherUniverseNav />
			</section>
			<section className='col-span-4 space-y-6'>{children}</section>
		</div>
	);
};

export default SedherUniverseWrapper;
