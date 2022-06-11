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
			{errorMessage && (
				<span className='absolute bottom-[-20px] text-sm text-accents-red'>
					{errorMessage}
				</span>
			)}
		</label>
	);
};

export default Input;
