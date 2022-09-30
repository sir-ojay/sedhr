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

export type PersonalInformationDetails = {
	country: string;
	criminalHistory: string;
	phoneNumber: string;
	physicalAddress: string;
	professionalRegistrationNumber: string;
	state: string;
};

type PersonalInformationFormProps = {
	category: string;
	personalInformationForm: (details: PersonalInformationDetails) => void;
};

const PersonalInformationForm = ({
	category,
	personalInformationForm,
}: PersonalInformationFormProps) => {
	const router = useRouter();
	const [countries, setCountries] = useState([]);
	const [states, setStates] = useState([]);

	const { type } = router.query;

	const methods = useForm({
		defaultValues: {
			phoneNumber: "",
			physicalAddress: "",
			country: "",
			state: "",
			criminalHistory: "",
			professionalRegistrationNumber: "",
		},
		mode: "onChange",
	});

	const {
		formState: { errors, isValid },
		watch,
	} = methods;

	const country = watch("country");

	const token = Cookies.get("sedherToken");

	const details = watch();

	const handleStep = (step: number) => {
		personalInformationForm(details);
		router.push({
			pathname: "/onboarding/verification",
			query: {
				...router.query,
				step,
			},
		});
	};

	const [getCountries, { isLoading }] = useGetCountriesMutation();

	const [getStates, { isLoading: isLoadingState }] = useGetStatesMutation();

	useUpdateEffect(() => {
		const handleGetStates = async () => {
			try {
				const body = {
					token,
					country,
				};
				const data = (await getStates(body as any).unwrap()) as any;
				setStates(data.data as any);
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
				const data = (await getCountries(body as any).unwrap()) as any;
				setCountries(data.data as any);
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
								name='phoneNumber'
								type='tel'
								label='Phone Number'
								placeholder='Phone Number'
								rules={["required"]}
							/>
							<Input
								name='physicalAddress'
								label='Physical Address'
								placeholder='Physical Address'
								rules={["required"]}
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
								rules={["required"]}
							/>
							<Input
								name='professionalRegistrationNumber'
								label='Professional Registration Number'
								placeholder='Professional Registration Number'
								rules={["required"]}
							/>
						</div>
					</form>
				</FormProvider>
			</section>
			<div className='flex justify-end my-10'>
				<Button
					disabled={category === "" || !isValid}
					onClick={() => handleStep(type?.toString() === "hcp's" ? 4 : 2)}
					size='sm'
					className='w-full md:w-[311px]'>
					Next Step
				</Button>
			</div>
		</>
	);
};

export default PersonalInformationForm;
