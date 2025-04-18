import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import Checkbox from "../global/Checkbox";
import { useRouter } from "next/router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { LoginRequest, LoginResponse } from "@/types/auth/auth";
import { useLoginMutation } from "@/services/auth";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const SigninForm = () => {
	const router = useRouter();

	const methods = useForm({
		defaultValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
		mode: "onChange",
	});

	const {
		formState: { errors, isValid },
	} = methods;

	/* Handle submit */
	const [login, { isLoading }] = useLoginMutation();
	// console.log(login);

	const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
		try {
			const body = {
				...data,
				email: data.email.toLowerCase(),
				rememberMe: undefined,
			};
			const user = (await login(body).unwrap()) as LoginResponse;
			toast.success("Login successful");
			Cookies.set("sedherUser", JSON.stringify(user), {
				expires: 1,
			});
			Cookies.set("sedherToken", user.token, {
				expires: 1,
			});

			if (user.accountType && user.accountStatus === "approved"  && user.hasOnboarded) {
					router.push("/feed");
			} 
			else if(!user.hasOnboarded){
				router.push("/onboarding/account")
			}
			else if (
				['disapproved', 'closed', 'banned', 'inactive', 'drop off', 'under review', 'hibernated'].includes(
				  user.accountStatus
				)
			  ) {
				router.push('/onboarding/status');
			  } else {
				router.push("")
			}
		} catch (err: any) {
			toast.error(err?.data?.error);
		}
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className='space-y-6'>
				<Input
					name='email'
					label='Email Address'
					placeholder='you@sedher.com'
					type='email'
					rules={["required", "email"]}
				/>
				<Input
					name='password'
					label='Password'
					placeholder='password'
					type='password'
					rules={["required"]}
				/>
				<div className='flex justify-between items-center'>
					<Checkbox
						name='rememberMe'
						value={true}
						label='Remember me'
						size='md'
						id='rememberMe'
						onChange={() => {}}
					/>
					<Button
						tag='a'
						href='/auth/forgot-password'
						className='text-[#616A6A]'>
					Forget password
					</Button>
				</div>
				<Button
					theme='primary'
					type='submit'
					disabled={!isValid}
					className='w-full'
					loading={isLoading}>
					Login
				</Button>
				<div className='text-left text-dark-100 font-epilogue'>
					{/* {`Already have an account? `} */}
					{`Don’t have an account?  `}
					<Button
						tag='a'
						href='/auth/signup?step=1'
						theme='primary'
						className='font-semibold'>
						Sign up
					</Button>
				</div>
				<div className='pb-8' />
			</form>
		</FormProvider>
	);
};

export default SigninForm;
