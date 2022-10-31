import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import LargeProfileCard from "@/components/global/LargeProfileCard";
import Modal from "@/components/global/Modal";
import SelectInput from "@/components/global/SelectInput";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const education = () => {
	const month = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const methods = useForm({
		mode: "onChange",
		defaultValues: {
			school: "",
			description: "",
		},
	});
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isValid },
	} = methods;

	const [showAddExperience, setShowAddExperience] = useState(false);

	const addExperience = () => {
		setShowAddExperience(!showAddExperience);
	};
	const getDropList = () => {
		const year = new Date().getFullYear();
		return Array.from(new Array(30), (v, i) => (
			<option key={i} value={year - i}>
				{year - i}
			</option>
		));
	};
	return (
		<DefaultLayout title='Sedher | Profile | Details'>
			<div className='flex flex-col lg:grid lg:grid-cols-9 gap-8'>
				<div className='col-span-6 space-y-5'>
					<WhiteWrapper>
						<LargeProfileCard
							editable={false}
							avatarShape='circle'
							title='Education'
							type='education'
							showEditIcon
							addExperience={addExperience}
						/>
					</WhiteWrapper>
				</div>
			</div>
			<div className='w-[400px] h-[500px]'>
				<Modal show={showAddExperience} onRequestClose={() => addExperience()}>
					<FormProvider {...methods}>
						<div className='flex items-center justify-between'>
							<div className='flex items-center gap-7'>
								<div className='text-base xl:text-lg font-semibold text-[#25324B]'>
									Edit education
								</div>
								<div className='border'></div>
							</div>
							<button
								onClick={() => setShowAddExperience(false)}
								aria-label='close'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M5.15213 5.1515C5.37716 4.92654 5.68233 4.80016 6.00052 4.80016C6.31872 4.80016 6.62389 4.92654 6.84892 5.1515L12.0005 10.3031L17.1521 5.1515C17.2628 5.03689 17.3952 4.94547 17.5416 4.88258C17.688 4.81969 17.8455 4.78659 18.0048 4.7852C18.1642 4.78382 18.3222 4.81418 18.4697 4.87452C18.6171 4.93485 18.7511 5.02396 18.8638 5.13663C18.9765 5.2493 19.0656 5.38328 19.1259 5.53076C19.1862 5.67823 19.2166 5.83625 19.2152 5.99558C19.2138 6.15492 19.1807 6.31238 19.1178 6.45879C19.055 6.60519 18.9635 6.73761 18.8489 6.8483L13.6973 11.9999L18.8489 17.1515C19.0675 17.3778 19.1885 17.6809 19.1857 17.9956C19.183 18.3102 19.0568 18.6112 18.8343 18.8337C18.6118 19.0562 18.3108 19.1824 17.9962 19.1851C17.6816 19.1878 17.3784 19.0669 17.1521 18.8483L12.0005 13.6967L6.84892 18.8483C6.6226 19.0669 6.31948 19.1878 6.00484 19.1851C5.69021 19.1824 5.38923 19.0562 5.16674 18.8337C4.94425 18.6112 4.81805 18.3102 4.81532 17.9956C4.81258 17.6809 4.93354 17.3778 5.15213 17.1515L10.3037 11.9999L5.15213 6.8483C4.92716 6.62327 4.80078 6.3181 4.80078 5.9999C4.80078 5.68171 4.92716 5.37654 5.15213 5.1515Z'
										fill='#515B6F'
									/>
								</svg>
							</button>
						</div>

						<div className='mt-6 space-y-10'>
							<div>
								<Input label='School' type='text' name='school' required />
							</div>
							<div>
								<div className='w-full'>
									<SelectInput
										label='DegreeType'
										name='degreeType'
										theme='plain'
										option='Bachelors'
										options={[
											"Bachelor of Architecture - BArch",
											"Bachelor of Science - BS",
											"Bachelor of Arts - BA",
											"Bachelor of Engineering - BE",
										]}
										className='w-full rounded-[5px] border-[2px] py-3 px-4 border-[#B8C9C9] '
									/>
								</div>
							</div>
							<div>
								<Input label='Degree' type='text' name='degree' required />
							</div>
							<div>
								<div className='flex items-center gap-5'>
									<div className='w-full'>
										<SelectInput
											label='Start date* '
											name='startDate '
											theme='plain'
											option='September'
											options={month}
											className='w-full rounded-[5px] border-[2px] py-3 px-4 border-[#B8C9C9] '
										/>
									</div>
									<div className='w-full'>
										<SelectInput
											name='startYear '
											theme='plain'
											option='2001'
											options={getDropList()}
											className='w-full mt-[22px] rounded-[5px] border-[2px] py-3 px-4 border-[#B8C9C9] '
										/>
									</div>
								</div>
							</div>
							<div className='flex items-center gap-5'>
								<div className='w-full'>
									<SelectInput
										label='End date* '
										name='endDate '
										theme='plain'
										option='June'
										options={month}
										className='w-full rounded-[5px] border-[2px] py-3 px-4 border-[#B8C9C9] '
									/>
								</div>
								<div className='w-full'>
									<SelectInput
										name='endYear '
										theme='plain'
										option='2021'
										options={getDropList()}
										className='w-full mt-[22px] rounded-[5px] border-[2px] py-3 px-4 border-[#B8C9C9] '
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='desc'
									className='w-full font-bold text-left text-title mb-1'>
									Description
								</label>
								<textarea
									id='desc'
									className='w-full resize-none p-3 text-sm xl:text-base xl:p-6 bg-accents-light-blue rounded-[10px]  border-[#B8C9C9] border-[2px] outline-none'
									cols={30}
									rows={1}
									{...register("description", { required: true })}
								/>
							</div>
						</div>
						<div className='mt-6'>
							<div className='flex items-center justify-end'>
								<Button
									type='submit'
									size='sm'
									className='text-sm xl:text-base font-normal w-[120px]'>
									Save
								</Button>
							</div>
						</div>
					</FormProvider>
				</Modal>
			</div>
		</DefaultLayout>
	);
};

export default education;
