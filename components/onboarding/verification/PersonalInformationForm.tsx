import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import { useRouter } from "next/router";

type PersonalInformationFormProps = {
	categories: string[];
};

const PersonalInformationForm = ({
	categories,
}: PersonalInformationFormProps) => {
	const router = useRouter();

	const handleStep = (step: number) =>
		router.push(`/onboarding/verification?step=${step}`);
	return (
		<>
			<div className='w-full bg-white p-8'>
				<h4 className='font-semibold text-dark-900 font-epilogue font-[20px] mb-10'>
					Personal Information
				</h4>
				<form>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
						<Input label='First Name' placeholder='First Name' />
						<Input label='Last Name' placeholder='Last Name' />
						<Input type='email' label='Email' placeholder='Email' />
						<Input type='tel' label='Phone Number' placeholder='Phone Number' />
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
			</div>
			<div className='flex justify-end my-10'>
				<Button
					disabled={categories.length === 0}
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
