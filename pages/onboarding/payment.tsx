import OnboardingHeader from "@/components/onboarding/OnboardingHeader";
import AccountPackages from "@/components/onboarding/payments/AccountPackages";
import AccountTypesHorizontalList from "@/components/onboarding/payments/AccountTypesHorizontalList";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useVerifyPaymebtMutation } from "@/services/onboarding";
import { LoginResponse } from "@/types/auth/auth";
import { VerifyPaymentResponse } from "@/types/onboarding";
import { requireAuthentication } from "hoc/requireAuthentication";
import Cookies from "js-cookie";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { ClipLoader } from "react-spinners";

const payment: NextPage = () => {
	const [billRange, setBillRange] = useState("monthly");
	const [amount, setAmount] = useState<number>(0);
	const [count, setCount] = useState<number>(0);
	const [user, setUser] = useState<LoginResponse>();

	const router = useRouter();

	useEffect(() => {
		try {
			const user = JSON.parse(Cookies.get("sedherUser") || "{}");
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	}, []);

	const [verify, { isLoading }] = useVerifyPaymebtMutation();

	const verifyPayment = async (ref: any) => {
		try {
			const body = {
				reference: ref.reference as string,
				amount: amount * 100,
				email: user?.email as string,
			};
			(await verify(body).unwrap()) as VerifyPaymentResponse;
			toast.success("payment successful");
			router.push("/onboarding/verification");
		} catch (err: any) {
			toast.error(err?.data?.message);
		}
	};

	const config = {
		reference: uuid(),
		email: user?.email as string,
		amount: amount * 100,
		publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PK as string,
	};

	const onSuccess = (reference: void) => {
		verifyPayment(reference as any);
	};

	const onClose = () => {
		// console.log("closed");
	};

	const initializePayment = usePaystackPayment(config);

	const makePayment = (_amount: number) => {
		setAmount(_amount);
		setCount(count + 1);
	};

	useEffect(() => {
		if (amount > 0) initializePayment(onSuccess, onClose);
	}, [amount, count]);

	return (
		<DefaultLayout title='Sedher | Onboarding | Payment' showHeader={false}>
			<OnboardingHeader step={2}>
				<AccountTypesHorizontalList />

				{isLoading && (
					<div className='bg-[#25324B4D] z-20 fixed top-0 bottom-0 left-0 right-0 w-screen h-screen flex justify-center items-center'>
						<ClipLoader color='#3772FF' loading={isLoading} size={100} />
					</div>
				)}

				<section className='flex flex-col font-epilogue text-center items-center'>
					<div className='w-[265px] my-9 flex items-center justify-between bg-tertiary p-1'>
						<div
							onClick={() => setBillRange("monthly")}
							className={`px-3 py-2 font-semibold cursor-pointer transition-all ease-linear ${
								billRange === "monthly"
									? "bg-white text-primary"
									: "text-[#11747d67]"
							}`}>
							Bill monthly
						</div>
						<div
							onClick={() => setBillRange("annually")}
							className={`px-3 py-2 font-semibold cursor-pointer transition-all ease-linear ${
								billRange === "annually"
									? "bg-white text-primary"
									: "text-[#11747d67]"
							}`}>
							Billed Annually
						</div>
					</div>

					<p className='text-secondary max-w-[538px]'>
						We set out with one goal in mind: to produce the most user-friendly
						web community software ever. We were successful.
					</p>
				</section>

				<AccountPackages makePayment={makePayment} />
			</OnboardingHeader>
		</DefaultLayout>
	);
};

export default payment;

export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {},
		};
	}
);
