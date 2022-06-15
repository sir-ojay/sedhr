import { v4 as uuidv4 } from "uuid";

type RadioInputGroupProps = {
	label: string;
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	options: string[];
	className?: string;
};

const RadioInputGroup = ({
	label,
	name,
	onChange,
	options,
	className,
}: RadioInputGroupProps) => {
	return (
		<div className={`font-epilogue space-y-1 ${className}`}>
			<label id={name} className='font-semibold text-dark-900'>
				{label}
			</label>
			<div className='flex items-center flex-wrap gap-2 px-2 py-[6px] border-2 border-[#B8C9C9] w-fit rounded-[5px]'>
				{options.map((option) => {
					const id = uuidv4();
					return (
						<label
							htmlFor={option + id}
							key={option}
							className='form-check flex items-center gap-2 bg-[#F8F8FD] py-[4px] px-3'>
							<input
								className='form-check-input appearance-none rounded-full h-5 w-5 border-gray-300 bg-transaparent border-2 checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer'
								type='radio'
								name={name}
								id={option + id}
								onChange={onChange}
								value={option}
							/>
							<span className='mt-1 text-primary'>{option}</span>
						</label>
					);
				})}
			</div>
		</div>
	);
};

export default RadioInputGroup;
