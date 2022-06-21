import React from "react";

type DividerProps = {
	label: string;
};

const Divider = ({ label }: DividerProps) => {
	return (
		<div
			aria-label='Or sign in with email'
			className='flex items-center justify-between gap-2 my-6'>
			<div className='w-[40%] h-[1px] bg-[#B8C9C9]'></div>
			<span className='text-center w-[60%] text-[#899A9A] font-epilogue'>
				{label}
			</span>
			<div className='w-[40%] h-[1px] bg-[#B8C9C9]'></div>
		</div>
	);
};

export default Divider;
