import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import SelectInput from "@/components/global/SelectInput";
import {
	useGetCountriesMutation,
	useGetStatesMutation,
} from "@/services/onboarding";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useUpdateEffect } from "react-use";

type PersonalInformationFormProps = {
	category: string;
};

const PersonalInformationForm = ({
	category,
}: PersonalInformationFormProps) => {
	const router = useRouter();
	const [countries, setCountries] = useState([]);
	const [states, setStates] = useState([]);

	const handleStep = (step: number) =>
		router.push(`/onboarding/verification?step=${step}`);

	const methods = useForm({
		defaultValues: {
			email: "",
			country: "",
		},
		mode: "onChange",
	});

	const {
		formState: { errors, isValid },
		watch,
	} = methods;

	const country = watch("country");

	const token = Cookies.get("sedherToken");

	const [getCountries, { isLoading }] = useGetCountriesMutation();

	const [getStates, { isLoading: isLoadingState }] = useGetStatesMutation();

	useUpdateEffect(() => {
		const handleGetStates = async () => {
			try {
				const body = {
					token,
					country,
				};
				const data = await getStates(body as any).unwrap();
				setStates(data as any);
			} catch (err: any) {
				toast.error(err?.data?.message);
			}
		};
		handleGetStates();
	}, [country]);

	useEffect(() => {
		const handleGetCountries = async () => {
			try {
				const body = {
					token,
				};
				const data = await getCountries(body as any).unwrap();
				setCountries(data as any);
			} catch (err: any) {
				toast.error(err?.data?.message);
			}
		};
		handleGetCountries();
	}, []);
	return (
		<>
			<section className='w-full bg-white p-5 md:p-8'>
				<FormProvider {...methods}>
					<form>
						<h4 className='font-semibold text-dark-900 font-epilogue font-[20px] mb-10'>
							Personal Information
						</h4>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
							<Input
								label='First Name'
								name='firstName'
								placeholder='First Name'
							/>
							<Input
								label='Last Name'
								name='lastName'
								placeholder='Last Name'
							/>
							<Input
								type='email'
								name='email'
								label='Email'
								placeholder='Email'
							/>
							<Input
								name='phoneNumber'
								type='tel'
								label='Phone Number'
								placeholder='Phone Number'
							/>
							<Input
								name='physicalAddress'
								label='Physical Address'
								placeholder='Physical Address'
							/>
							<SelectInput
								options={countries}
								option='Select Country'
								name='country'
								label='Country'
								id='country'
								loading={isLoading}
								required
							/>
							<SelectInput
								name='state'
								label='State/Region'
								id='state'
								option='Select State/Region'
								loading={isLoadingState}
								required
								options={states}
							/>
							<Input
								name='criminalHistory'
								label='Criminal History'
								placeholder='Criminal History'
							/>
							<Input
								name='professionalRegistrationNumber'
								label='Professional Registration Number'
								placeholder='Professional Registration Number'
							/>
						</div>
					</form>
				</FormProvider>
			</section>
			<div className='flex justify-end my-10'>
				<Button
					disabled={category === ""}
					onClick={() => handleStep(2)}
					size='sm'
					className='w-full md:w-[311px]'>
					Next Step
				</Button>
			</div>
		</>
	);
};

export default PersonalInformationForm;
