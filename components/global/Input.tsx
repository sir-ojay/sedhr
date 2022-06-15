import { useState } from "react";
import { InputProps } from "@/types/global/InputProps";

const Input = ({
	label,
	placeholder,
	type = "text",
	id,
	onChange,
	value,
	max,
	autoComplete = "off",
	disabled = false,
	...rest
}: InputProps) => {
	const [errorMessage, setErrorMessage] = useState("");

	return (
		<label htmlFor={id} className='flex flex-col relative'>
			<span className='w-full font-bold text-left text-[#101C1D] mb-1'>
				{label}
			</span>
			{type !== "file" && (
				<input
					className='w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none'
					type={type}
					placeholder={placeholder}
					id={id}
					value={value}
					onChange={onChange}
					disabled={disabled}
					{...rest}
				/>
			)}
			{type === "file" && (
				<>
					<input
						className='appearance-none hidden'
						type={type}
						placeholder={placeholder}
						id={id}
						value={value}
						onChange={onChange}
						disabled={disabled}
						{...rest}
					/>
					<div className='w-full dashed-file flex justify-center items-center cursor-pointer gap-4 py-3 h-[52px] px-4 bg-[#F8F8FD] rounded-[5px] outline-none'>
						<svg
							width='25'
							height='24'
							viewBox='0 0 25 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M15.4999 6.99996L8.99995 13.5C8.60212 13.8978 8.37863 14.4374 8.37863 15C8.37863 15.5626 8.60212 16.1021 8.99995 16.5C9.39777 16.8978 9.93734 17.1213 10.4999 17.1213C11.0626 17.1213 11.6021 16.8978 11.9999 16.5L18.4999 9.99996C19.2956 9.20432 19.7426 8.12518 19.7426 6.99996C19.7426 5.87475 19.2956 4.79561 18.4999 3.99996C17.7043 3.20432 16.6252 2.75732 15.4999 2.75732C14.3747 2.75732 13.2956 3.20432 12.4999 3.99996L5.99995 10.5C4.80647 11.6934 4.13599 13.3121 4.13599 15C4.13599 16.6878 4.80647 18.3065 5.99995 19.5C7.19342 20.6934 8.81212 21.3639 10.4999 21.3639C12.1878 21.3639 13.8065 20.6934 14.9999 19.5L21.4999 13'
								stroke='#1E5156'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
						<span className='font-medium font-epilogue text-dark-100'>
							Attach Document
						</span>
					</div>
				</>
			)}
			{errorMessage && (
				<span className='absolute bottom-[-20px] text-sm text-accents-red'>
					{errorMessage}
				</span>
			)}
		</label>
	);
};

export default Input;
