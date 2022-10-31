import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";
import { InputProps } from "@/types/global/InputProps";
import { useFormContext } from "react-hook-form";
import { useUpdateEffect } from "react-use";

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
	name = "name",
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
	showFilePreview = false,
	autoComplete = "off",
	disabled = false,
	filePadding,
	...rest
}: InputProps) => {
	const [errorMessage, setErrorMessage] = useState("");
	const [focused, setFocused] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [fileUploaded, setFileUploaded] = useState(false);

	// / react-hook-form values
	const methods = useFormContext();

	const { watch, register: registerFile, setValue } = methods;

	const watchValue = watch(name);

	useUpdateEffect(() => {
		if (type === "file") {
			// console.log("registering file", watchValue);
			if (watchValue && watchValue[0]) {
				setFileUploaded(true);
			} else {
				setFileUploaded(false);
			}
		}
	}, [watchValue]);

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
					{!fileUploaded && (
						<input
							className='appearance-none hidden'
							type={type}
							placeholder={placeholder}
							id={id}
							disabled={disabled}
							{...rest}
							{...registerFile(name)}
						/>
					)}
					{!showFilePreview && (
						<div className='w-full dashed-file relative flex justify-center items-center cursor-pointer gap-4 py-3 h-[52px] px-4 bg-[#F8F8FD] rounded-[5px] outline-none'>
							{!fileUploaded && (
								<svg
									width='25'
									height='24'
									viewBox='0 0 25 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M15.4999 6.99996L8.99995 13.5C8.60212 13.8978 8.37863 14.4374 8.37863 15C8.37863 15.5626 8.60212 16.1021 8.99995 16.5C9.39777 16.8978 9.93734 17.1213 10.4999 17.1213C11.0626 17.1213 11.6021 16.8978 11.9999 16.5L18.4999 9.99996C19.2956 9.20432 19.7426 8.12518 19.7426 6.99996C19.7426 5.87475 19.2956 4.79561 18.4999 3.99996C17.7043 3.20432 16.6252 2.75732 15.4999 2.75732C14.3747 2.75732 13.2956 3.20432 12.4999 3.99996L5.99995 10.5C4.80647 11.6934 4.13599 13.3121 4.13599 15C4.13599 16.6878 4.80647 18.3065 5.99995 19.5C7.19342 20.6934 8.81212 21.3639 10.4999 21.3639C12.1878 21.3639 13.8065 20.6934 14.9999 19.5L21.4999 13'
										stroke='#1E5156'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							)}
							<span className='font-medium max-w-[200px] truncate overflow-hidden text-sm text-center font-epilogue text-dark-100'>
								{fileUploaded ? watchValue[0]?.name : "Attach Document"}
							</span>
							{fileUploaded && (
								<svg
									onClick={(e) => {
										e.preventDefault();
										setFileUploaded(false);
										setValue(name, undefined, { shouldValidate: true });
									}}
									className='absolute -top-2 -right-2'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
										fill='#3772FF'
									/>
									<path
										d='M15 9L9 15'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M9 9L15 15'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							)}
						</div>
					)}
					{showFilePreview && (
						<>
							{fileUploaded ? (
								<div
									className={`${filePadding ? "p-0" : "p-4 "}dashed-file-blue`}>
									<div className='p-4 bg-accents-light-blue rounded-[10px]'>
										<img src={URL?.createObjectURL(watchValue[0])} alt='' />
									</div>
									<button className='cursor-pointer rounded-full flex items-center justify-center'>
										<button
											onClick={(e) => {
												e.stopPropagation();
												e.preventDefault();
												setFileUploaded(false);
												setValue(name, undefined, { shouldValidate: true });
											}}
											className='bg-[#515B6FCC] cursor-pointer absolute top-4 right-4 w-fit p-2 rounded-full flex items-center justify-center'>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M5.15115 5.1515C5.37618 4.92654 5.68135 4.80016 5.99955 4.80016C6.31775 4.80016 6.62291 4.92654 6.84795 5.1515L11.9995 10.3031L17.1511 5.1515C17.2618 5.03689 17.3943 4.94547 17.5407 4.88258C17.6871 4.81969 17.8445 4.78659 18.0039 4.7852C18.1632 4.78382 18.3212 4.81418 18.4687 4.87452C18.6162 4.93485 18.7501 5.02396 18.8628 5.13663C18.9755 5.2493 19.0646 5.38328 19.1249 5.53076C19.1853 5.67823 19.2156 5.83625 19.2142 5.99558C19.2129 6.15492 19.1798 6.31238 19.1169 6.45879C19.054 6.60519 18.9626 6.73761 18.8479 6.8483L13.6963 11.9999L18.8479 17.1515C19.0665 17.3778 19.1875 17.6809 19.1848 17.9956C19.182 18.3102 19.0558 18.6112 18.8333 18.8337C18.6108 19.0562 18.3099 19.1824 17.9952 19.1851C17.6806 19.1878 17.3775 19.0669 17.1511 18.8483L11.9995 13.6967L6.84795 18.8483C6.62163 19.0669 6.3185 19.1878 6.00387 19.1851C5.68923 19.1824 5.38826 19.0562 5.16577 18.8337C4.94328 18.6112 4.81707 18.3102 4.81434 17.9956C4.81161 17.6809 4.93256 17.3778 5.15115 17.1515L10.3027 11.9999L5.15115 6.8483C4.92618 6.62327 4.7998 6.3181 4.7998 5.9999C4.7998 5.68171 4.92618 5.37654 5.15115 5.1515Z'
													fill='white'
												/>
											</svg>
										</button>
									</button>
								</div>
							) : (
								<div className='w-full text-sm xl:text-base text-center dashed-file-blue relative flex flex-col justify-center items-center cursor-pointer gap-2 xl:gap-4 p-4 bg-[#F8F8FD] rounded-[5px] outline-none'>
									<svg
										width='32'
										height='32'
										viewBox='0 0 32 32'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<g clipPath='url(#clip0_4025_9746)'>
											<path
												d='M20 10.6665H20.0133'
												stroke='#3772FF'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
											<path
												d='M22.6663 5.3335H9.33301C7.12387 5.3335 5.33301 7.12436 5.33301 9.3335V22.6668C5.33301 24.876 7.12387 26.6668 9.33301 26.6668H22.6663C24.8755 26.6668 26.6663 24.876 26.6663 22.6668V9.3335C26.6663 7.12436 24.8755 5.3335 22.6663 5.3335Z'
												stroke='#3772FF'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
											<path
												d='M5.33301 19.9999L10.6663 14.6666C11.2744 14.0815 11.9642 13.7734 12.6663 13.7734C13.3685 13.7734 14.0583 14.0815 14.6663 14.6666L21.333 21.3333'
												stroke='#3772FF'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
											<path
												d='M18.667 18.6664L20.0003 17.3331C20.6084 16.748 21.2982 16.4399 22.0003 16.4399C22.7025 16.4399 23.3922 16.748 24.0003 17.3331L26.667 19.9998'
												stroke='#3772FF'
												strokeWidth='2'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</g>
										<defs>
											<clipPath id='clip0_4025_9746'>
												<rect width='32' height='32' fill='white' />
											</clipPath>
										</defs>
									</svg>
									<div className='text-dark-100'>
										<span className='text-primary'>
											{placeholder || "Click to replace"}
										</span>{" "}
										or drag and drop
									</div>
									<div className='text-[#C1C5D0]'>
										SVG, PNG, JPG or GIF (max. 400 x 400px)
									</div>
								</div>
							)}
						</>
					)}
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
