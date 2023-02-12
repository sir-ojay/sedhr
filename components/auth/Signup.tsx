import React, { useEffect } from "react";
import Button from "@/components/global/Button";
import Divider from "@/components/global/Divider";
import SignupForm from "./SignupForm";
import Input from "../global/Input";
import { useRouter } from "next/router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
	useValidateEmailMutation,
	useVerifyEmailMutation,
} from "@/services/auth";
import { ValidateEmailRequest } from "@/types/auth/auth";
import { toast } from "react-toastify";
import RegisterForm from "./RegisterForm";

const Signup = () => {
	const router = useRouter();

	const { step, email, otp } = router.query;

	const methods = useForm({
		defaultValues: {
			otp: otp?.toString() || "",
		},
		mode: "onChange",
	});

	const {
		formState: { isValid },
		setValue,
	} = methods;

	useEffect(() => {
		setValue("otp", otp?.toString() || "", { shouldValidate: true });
	}, [otp]);

	/* Handle submit */
	const [validateOTP, { isLoading }] = useValidateEmailMutation();

	const onSubmit: SubmitHandler<ValidateEmailRequest> = async (data) => {
		try {
			const body = {
				email: email?.toString(),
				otp: data.otp,
			};
			const user = await validateOTP(body).unwrap();
			toast.success(user.message);
			router.push({
				pathname: "/auth/signup",
				query: {
					...router.query,
					step: "3",
				},
			});
		} catch (err: any) {
			toast.error(err?.data?.error);
		}
	};

	const [verifyOTP] = useVerifyEmailMutation();

	return (
		<section className='w-full md:w-[408px] mx-auto mt-10 md:mt-[90px] text-center'>
			{(step === "1" || step === undefined) && (
				<>
					<h1 className='font-semibold text-[32px] leading-[120%] text-dark-900 font-clash'>
						Welcome to Sedher Health
					</h1>
					<p className='font-epilogue font-medium text-sm md:text-lg leading-[160%] text-dark-100 mb-6'>
						Let us get to know you better!
					</p>
					{/* <Button
						theme='plain'
						className='w-full border-2 border-[#D4EBEB] text-[#103BF2]'
						icon='google'>
						Sign up with Google
					</Button>
					<Divider label='Or sign up with email' /> */}

					<SignupForm />
				</>
			)}
			{step === "2" && (
				<>
					<h1 className='font-semibold text-[32px] leading-[120%] text-dark-900 font-clash'>
						Verify your Email
					</h1>
					<p className='font-epilogue font-medium text-lg leading-[160%] text-dark-100 mb-6'>
						Please fill the code to confirm your email
					</p>
					<FormProvider {...methods}>
						<form
							onSubmit={methods.handleSubmit(onSubmit)}
							className='space-y-6'>
							<Input
								label='Enter verification Code'
								placeholder='Enter your verification Code'
								name='otp'
								rules={["required"]}
							/>
							<Button
								theme='primary'
								type='submit'
								disabled={!isValid}
								className='w-full'
								loading={isLoading}>
								Verify
							</Button>
							<div className='text-left text-dark-100 font-epilogue'>
								{`Didn’t get the code? `}
								<Button
									onClick={async (e) => {
										e.preventDefault();
										const user = await verifyOTP({
											email: email?.toString() || "",
										}).unwrap();
										toast.success(user?.message);
										// router.replace({
										// 	pathname: "/auth/signup",
										// 	query: {
										// 		...router.query,
										// 		otp: user.data.otp,
										// 	},
										// });
									}}
									tag='a'
									theme='primary'
									className='font-semibold'>
									Click Resend
								</Button>
							</div>
						</form>
					</FormProvider>
				</>
			)}
			{step === "3" && <RegisterForm />}
		</section>
	);
};

export default Signup;
