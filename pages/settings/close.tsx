import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import SettingsWrapper from "@/components/settings/SettingsWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useCloseAccountMutation } from "@/services/settings";
import { CloseAccountRequest } from "@/types/settings";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const close = () => {
	const methods = useForm({
		defaultValues: {
			reason: "",
		},
		mode: "onChange",
	});

	const {
		formState: { isValid, errors },
	} = methods;

	const token: any = Cookies.get("sedherToken");

	const [close, { isLoading }] = useCloseAccountMutation();

	const onSubmit: SubmitHandler<CloseAccountRequest | any> = async (data) => {
		try {
			const body = {
				reason: data.reason,
				token,
			};
			const result = await close(body).unwrap();
			toast.success("Account hibernated");
		} catch (err: any) {
			toast.error(err?.data?.error);
		}
	};

	const location = useRouter();

	return (
		<DefaultLayout title='Sedher | Settings | hibernate'>
			<SettingsWrapper>
				<div>
					<WhiteWrapper>
						<button
							onClick={() => location.back()}
							className='flex items-center space-x-4'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<g clip-path='url(#clip0_5333_109476)'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z'
										fill='#101C1D'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M4.29289 11.2929C4.68342 10.9024 5.31658 10.9024 5.70711 11.2929L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929Z'
										fill='#101C1D'
									/>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L5.70711 12.7071C5.31658 13.0976 4.68342 13.0976 4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289Z'
										fill='#101C1D'
									/>
								</g>
								<defs>
									<clipPath id='clip0_5333_109476'>
										<rect width='24' height='24' fill='white' />
									</clipPath>
								</defs>
							</svg>
							<span className='text-[#101C1D] mt-1 font-epilogue font-bold'>
								Back
							</span>
						</button>
						<div>
							<h4 className='mt-5 font-bold font-epilogue mb-2'>
								Close account
							</h4>
							<p className='font-epilogue text-[#25324B]'>
								Ajayi, we’re sorry to see you go.
							</p>

							<FormProvider {...methods}>
								<form
									onSubmit={methods.handleSubmit(onSubmit)}
									className='mt-8'>
									<Input
										label='Tell us why you want to close your account (optional)'
										placeholder='reason'
										name='reason'
									/>

									<Button loading={isLoading} className='mt-6' type='submit'>
										Close Account
									</Button>
								</form>
							</FormProvider>
						</div>
					</WhiteWrapper>
				</div>
			</SettingsWrapper>
		</DefaultLayout>
	);
};

export default close;
