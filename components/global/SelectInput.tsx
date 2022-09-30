import React from "react";
import { useFormContext } from "react-hook-form";
import ProgressBar from "./ProgressBar/ProgressBar";

type SelectInputProps =
	| ({
			label: string;
			id: string;
			name: string;
			option: string;
			options: string[];
			required?: boolean;
			loading?: boolean;
	  } & React.ChangeEventHandler<HTMLSelectElement>)
	| any;

const SelectInput = ({
	label,
	id,
	name,
	option,
	options,
	required = false,
	loading = false,
	...rest
}: SelectInputProps) => {
	const { register } = useFormContext();

	return (
		<label htmlFor={id} className='flex flex-col relative'>
			<span className='w-full font-bold text-left text-title mb-1'>
				{label}
			</span>
			{loading && (
				<div className='absolute w-full top-[22px] left-0'>
					<div className='rounded-t-[5px] overflow-hidden relative top-[2.5px]'>
						<ProgressBar value={0.7} indeterminate={true} />
					</div>
				</div>
			)}
			<select
				id={id}
				className='w-full py-3 h-[52px] px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none'
				{...rest}
				{...register(name, {
					required,
				})}>
				<option value='' hidden>
					{option}
				</option>
				{options?.map((option: string, index: number) => {
					return (
						<option value={option} key={index}>
							{option}
						</option>
					);
				})}
			</select>
		</label>
	);
};

export default SelectInput;
