import SettingsNav from "./SettingsNav";

type SettingsWrapperProps = {
	children: React.ReactNode;
};

const SettingsWrapper = ({ children }: SettingsWrapperProps) => {
	return (
		<div className='grid grid-cols-6 gap-8'>
			<section className='col-span-2 space-y-6'>
				<SettingsNav />
			</section>
			<section className='col-span-4 space-y-6'>{children}</section>
		</div>
	);
};

export default SettingsWrapper;
