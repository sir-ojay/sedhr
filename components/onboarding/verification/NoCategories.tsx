import React from "react";

const NoCategories = () => {
	return (
		<div className='w-full h-[405px] p-5 bg-white flex flex-col gap-[6px] justify-center items-center font-epilogue text-center transition-all ease-linear'>
			<div className='font-medium text-lg md:text-2xl text-dark-900 max-w-[631.48px]'>
				No selection have been made in the categories section
			</div>
			<div className='text-sm md:text-lg font-medium text-dark-100'>
				Select a category to continue
			</div>
		</div>
	);
};

export default NoCategories;
