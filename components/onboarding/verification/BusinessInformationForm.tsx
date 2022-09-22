import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";

const BusinessInformationForm = () => {
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
							Business Information
						</h4>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
							<Input label='Business name' placeholder='Business name' />
							<Input
								type='email'
								label='Business Email'
								placeholder='Business Email'
							/>
							<Input
								type='tel'
								label='Business Number'
								placeholder='Business Number'
							/>
							<Input
								label='Business Website'
								type='url'
								placeholder='Business Website'
							/>
							<Input label='Physical Address' placeholder='Physical Address' />
							<Input
								label='Registered Business Address'
								placeholder='Registered Business Address'
							/>
							<Input label='State' placeholder='State' />
							<Input label='LGA' placeholder='LGA' />
							<Input label='Annual Revenue' placeholder='Annual Revenue' />
							<Input label='Account number' placeholder='Account number' />
							<Input
								label='History of misbehaviour'
								placeholder='History of misbehaviour'
							/>
							<Input label='Select ID' placeholder='Select ID' />
						</div>

						<h4 className='font-semibold text-dark-900 font-epilogue font-[20px] my-10'>
							Plaform manager
						</h4>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
							<Input label='Full Name' placeholder='Full Name' />
							<Input type='email' label='Email' placeholder='Email' />
							<Input
								type='tel'
								label='Phone Number'
								placeholder='Phone Number'
							/>
						</div>
					</form>
				</FormProvider>
			</section>
			<div className='flex justify-between my-10'>
				<Button
					onClick={() => handleStep(1)}
					size='sm'
					theme='outline'
					className='w-[311px]'>
					Previous Step
				</Button>
				<Button onClick={() => handleStep(3)} size='sm' className='w-[311px]'>
					Next Step
				</Button>
			</div>
		</>
	);
};

export default BusinessInformationForm;
