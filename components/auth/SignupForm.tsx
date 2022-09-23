import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Checkbox from "../global/Checkbox";
import { useRouter } from "next/router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useVerifyEmailMutation } from "@/services/auth";
import { VerifyEmailRequest } from "@/types/auth/auth";
import { toast } from "react-toastify";

const SignupForm = () => {
	const router = useRouter();

	const methods = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			termsAndconditions: false,
		},
		mode: "onChange",
	});

	const {
		formState: { errors, isValid },
	} = methods;

	/* Handle submit */
	const [verifyOTP, { isLoading }] = useVerifyEmailMutation();

	const onSubmit: SubmitHandler<VerifyEmailRequest> = async (data) => {
		try {
			const body = {
				email: data.email,
			};
			const user = await verifyOTP(body).unwrap();
			toast.success(user.message);
			console.log(user);
			router.push({
				pathname: "/auth/signup",
				query: {
					step: "2",
					email: data.email,
					firstName: data.firstName,
					lastName: data.lastName,
					// otp: user.data.otp,
				},
			});
		} catch (err: any) {
			console.log("err", err);
			toast.error(err?.data?.message);
		}
	};
	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-6'>
				<Input
					label='First Name'
					placeholder='first name'
					rules={["required"]}
					name='firstName'
				/>
				<Input
					label='Last Name'
					placeholder='last name'
					rules={["required"]}
					name='lastName'
				/>
				<Input
					label='Email Address'
					placeholder='you@sedher.com'
					type='email'
					rules={["required", "email"]}
					name='email'
				/>
				<div className='flex justify-between items-center'>
					<label className='flex '>
						<Checkbox
							name='termsAndconditions'
							value={true}
							size='md'
							id='rememberMe'
							required
							onChange={() => {}}
						/>
						<div className='text-left text-dark-100 font-epilogue text-sm'>
							{`By clicking 'Continue', you acknowledge that you have read and
						accept the `}
							<Button tag='a' href='/terms-of-service' theme='secondary'>
								Terms of Service
							</Button>
							{` and `}
							<Button tag='a' href='/privacy-policy' theme='secondary'>
								Privacy Policy.
							</Button>
						</div>
					</label>
				</div>
				<Button
					theme='primary'
					type='submit'
					disabled={!isValid}
					className='w-full'
					loading={isLoading}>
					Get Started
				</Button>
				<div className='text-left text-dark-100 font-epilogue'>
					{`Already have an account? `}
					<Button
						tag='a'
						href='/auth/signin'
						theme='primary'
						className='font-semibold'>
						Sign in
					</Button>
				</div>
				<div className='pb-8' />
			</form>
		</FormProvider>
	);
};

export default SignupForm;
