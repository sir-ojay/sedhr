import Button from "@/components/global/Button";
import FileUpload from "@/components/global/FileUpload";
import Input from "@/components/global/Input";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";

const UploadDocumentsForm = () => {
	const router = useRouter();

	const handleStep = (step: number) => {
		if (step === 5) {
			router.push(`/onboarding/start`);
		} else {
			router.push(`/onboarding/verification?step=${step}`);
		}
	};

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
							Upload document
						</h4>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
							<Input type='file' label='CAC registration' />
							<Input type='file' label='Operating permit' />
							<Input type='file' label='Operating License' />
							<Input type='file' label='Tax ID Document' />
							<Input type='file' label='Driver License ' />
						</div>
					</form>
				</FormProvider>
			</section>
			<div className='flex justify-between my-10'>
				<Button
					onClick={() => handleStep(3)}
					size='sm'
					theme='outline'
					className='w-[311px]'>
					Previous Step
				</Button>
				<Button
					type='submit'
					onClick={() => handleStep(5)}
					size='sm'
					className='w-[311px]'>
					Complete
				</Button>
			</div>
		</>
	);
};

export default UploadDocumentsForm;
