type SwitchProps = {
	label: string;
};

const Switch = ({ label }: SwitchProps) => {
	return (
		<div className='flex'>
			<div className='form-check flex form-switch space-x-[10px]'>
				<label
					className='form-check-label block text-dark-100 mt-[2px] text-left'
					htmlFor='flexSwitchCheckDefault'>
					{label}
				</label>
				<input
					className='form-check-input appearance-none w-[42px] -ml-10 rounded-full float-left h-6 align-top  bg-no-repeat bg-contain bg-[#E0E0E0] checked:bg-primary focus:outline-none cursor-pointer shadow-sm'
					type='checkbox'
					role='switch'
					id='flexSwitchCheckDefault'
				/>
			</div>
		</div>
	);
};

export default Switch;
