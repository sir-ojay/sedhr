import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";

type PersonalInformationFormProps = {
	category: string;
};

const PersonalInformationForm = ({
	category,
}: PersonalInformationFormProps) => {
	const router = useRouter();

	const handleStep = (step: number) =>
		router.push(`/onboarding/verification?step=${step}`);

	const methods = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
	});

	const {
		formState: { errors, isValid },
	} = methods;
	return (
		<>
			<section className='w-full bg-white p-8'>
				<FormProvider {...methods}>
					<form>
						<h4 className='font-semibold text-dark-900 font-epilogue font-[20px] mb-10'>
							Personal Information
						</h4>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
							<Input label='First Name' placeholder='First Name' />
							<Input label='Last Name' placeholder='Last Name' />
							<Input type='email' label='Email' placeholder='Email' />
							<Input
								type='tel'
								label='Phone Number'
								placeholder='Phone Number'
							/>
							<Input label='Physical Address' placeholder='Physical Address' />
							<Input label='LGA' placeholder='LGA' />
							<Input label='State' placeholder='State' />
							<Input label='State of origin' placeholder='State of origin' />
							<Input label='Select ID' placeholder='Select ID' />
							<Input
								type='date'
								label='Date of birth'
								placeholder='Date of birth'
							/>
							<Input label='Criminal History' placeholder='Criminal History' />
						</div>
					</form>
				</FormProvider>
			</section>
			<div className='flex justify-end my-10'>
				<Button
					disabled={category === ""}
					onClick={() => handleStep(2)}
					size='sm'
					className='w-[311px]'>
					Next Step
				</Button>
			</div>
		</>
	);
};

export default PersonalInformationForm;
