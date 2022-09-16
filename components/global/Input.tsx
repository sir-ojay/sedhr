import { HTMLInputTypeAttribute, useRef, useState } from "react";
import { InputProps } from "@/types/global/InputProps";
import { useFormContext } from "react-hook-form";

type ValidationResult = boolean | string;
export interface ValidationRules {
	email: (value: string, label?: string) => ValidationResult;
	required: (value: any, label?: string) => ValidationResult;
	phone: (value: any, label?: string) => ValidationResult;
	altPhone: (value: any, label?: string) => ValidationResult;
	password: (value: any, label?: string) => ValidationResult;
	otp: (value: any, label?: string) => ValidationResult;
	confirmPassword: (value: any, label?: string) => ValidationResult;
	noSpaces: (value: any, label?: string) => ValidationResult;
}

const Input = ({
	name,
	label,
	placeholder,
	type = "text",
	id,
	onChange = () => {},
	// value,
	readOnly = false,
	autoFocus = false,
	pattern,
	min,
	max,
	rules = [],
	autoComplete = "off",
	disabled = false,
	...rest
}: InputProps) => {
	const [errorMessage, setErrorMessage] = useState("");
	const [focused, setFocused] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement | null>(null);
	// / react-hook-form values
	const methods = useFormContext();

	const { watch } = methods;

	const validationRules: ValidationRules = {
		required: (value, label = "") => {
			if (value !== null && value !== undefined && value !== "") return true;
			else return `The ${label} field is required`;
		},
		email: (value, label = "") => {
			const match = value
				.toString()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				);
			return match ? true : `The ${label} field has to be a valid email`;
		},
		password: (value, label = "") => {
			const messages = [];

			if (!/[A-Z]/g.test(value)) {
				messages.push("an uppercase letter");
			}
			if (!/[a-z]/g.test(value)) {
				messages.push("a lowercase letter");
			}
			if (!/[0-9]/g.test(value)) {
				messages.push("a number");
			}
			// eslint-disable-next-line no-useless-escape
			if (!/[*|\":<>[\]{}`\\()';@&$#]/g.test(value)) {
				messages.push("a special character");
			}
			if (value.length < 8) {
				messages.push("at least 8 digits");
			}

			const message =
				messages.length > 1
					? `${messages.slice(0, -1).join(", ")} and ${messages.slice(-1)}`
					: `${messages.join(", ")}`;
			return messages.length > 0
				? `The ${label} field must have ${message}`
				: true;
		},
		otp: (value, label = "") => {
			return value.length === 6
				? true
				: `The ${label} field must be of length 6`;
		},
		phone: (value, label = "") => {
			return value.length <= 10
				? true
				: `The ${label} field must be less than or equal to 12 digits`;
		},
		altPhone: (value, label = "") => {
			return value.length <= 12
				? true
				: `The ${label} field must be less than or equal to 12 digits`;
		},
		confirmPassword: (value, label = "") => {
			return value === watch("password")
				? true
				: `The ${label} field must be equal to the Password field`;
		},
		noSpaces: (value, label = "") => {
			return !value.includes(" ")
				? true
				: `The ${label} field is not allowed to contain spaces`;
		},
	};

	// state for handling type
	const [computedType, setComputedType] = useState<HTMLInputTypeAttribute>(
		type.includes("date") ? "text" : type
	);

	const computedRules = rules.reduce<{
		[index: string]: (param: string) => ValidationResult;
	}>((map, key) => {
		map[key] = (value) => validationRules[key](value, label || name);
		return map;
	}, {});

	const { error } = methods.getFieldState(name);
	const register = methods.register(name, {
		validate: computedRules,
		// max,
		// min,
		pattern: pattern
			? {
					value: new RegExp(pattern),
					message:
						errorMessage ||
						`The ${label} field doesn't satisfy the regex ${pattern}`,
			  }
			: undefined,
		min: min
			? {
					value: min,
					message: `The ${label} field must be greater than or equal to ${min}`,
			  }
			: undefined,
		max: max
			? {
					value: max,
					message: `The ${label} field must be less than or equal to ${max}`,
			  }
			: undefined,
	});
	const value = methods.getValues(name);

	return (
		<label htmlFor={id} className='flex flex-col relative'>
			<span className='w-full font-bold text-left text-title mb-1'>
				{label}
			</span>
			{type === "search" && (
				<div className='flex items-center w-full gap-4 py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px]'>
					<div>
						<img
							src='/assets/icons/layouts/search.svg'
							alt='see more'
							title='see more'
						/>
					</div>
					<input
						className=' focus:border-primary outline-none w-full'
						type={type}
						placeholder={placeholder}
						id={id}
						value={value}
						onChange={onChange}
						disabled={disabled}
						{...rest}
					/>
				</div>
			)}
			{type !== "file" && type !== "search" && (
				<input
					{...register}
					className='w-full py-3 px-4 border-2 border-[#B8C9C9] rounded-[5px] focus:border-primary outline-none'
					type={type}
					placeholder={placeholder}
					id={id}
					// value={value}
					// onBlur={(event) => {
					// 	register.onBlur(event);
					// 	setFocused(false);
					// }}
					onChange={(event) => {
						register.onChange(event);
						onChange(event);
					}}
					ref={(e) => {
						register.ref(e);
						inputRef.current = e;
					}}
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
			{error && (
				<span className='text-left text-sm mt-1 text-accents-red'>
					{error.message}
				</span>
			)}
			{/* {error && <div className={styles.error}>{error.message}</div>}
			{!error && hint && <div className={styles.hint}>{hint}</div>} */}
		</label>
	);
};

export default Input;
