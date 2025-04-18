import { useFormContext } from "react-hook-form";

type CheckboxProps = {
	name: string;
	label?: string;
	value?: boolean;
	onChange?: (value: boolean) => void;
	size?: "sm" | "md" | "lg";
	id?: string;
	required?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Checkbox = ({
	label,
	size = "md",
	value,
	onChange,
	id,
	name,
	required = false,
	...rest
}: CheckboxProps) => {
	const checkboxSize = (size: string) => {
		switch (size) {
			case "sm":
				return "h-4 w-4";
			case "md":
				return "h-6 w-6";
			case "lg":
				return "h-8 w-8";
			default:
				return "h-6 w-6";
		}
	};

	const { register } = useFormContext();

	return (
		<div className='flex justify-center '>
			<div className='flex items-center'>
				<input
					className={`${checkboxSize(
						size
					)} form-check-input appearance-none border-2 border-[#D4EBEB] rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-4 cursor-pointer`}
					type='checkbox'
					id={id}
					{...rest}
					{...register(name, {
						required,
					})}
				/>
				<label className='text-dark-100 font-epilogue' htmlFor={id}>
					{label}
				</label>
			</div>
		</div>
	);
};

export default Checkbox;
