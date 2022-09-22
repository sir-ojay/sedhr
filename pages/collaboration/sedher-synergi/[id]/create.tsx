import CollaborationWrapper from "@/components/collaboration/CollaborationWrapper";
import Avatar from "@/components/global/Avatar";
import Button from "@/components/global/Button";
import GoBackButton from "@/components/global/GoBackButton";
import Input from "@/components/global/Input";
import LabelValue from "@/components/global/LabelValue";
import StatusPill from "@/components/global/StatusPill";
import WhiteWrapper from "@/components/global/WhiteWrapper";
import DefaultLayout from "@/layouts/DefaultLayout";
import { requireAuthentication } from "hoc/requireAuthentication";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";

const Create = () => {
	const router = useRouter();
	const methods = useForm({
		defaultValues: {
			description: "",
		},
		mode: "onChange",
	});
	return (
		<DefaultLayout>
			<div className='space-y-8'>
				<GoBackButton label='1600 W Universal Machining Centre' />

				<WhiteWrapper>
					<div className='flex justify-between'>
						<div>
							<h3 className='font-semibold text-lg font-archivo text-[#101C1D]'>
								Patient information
							</h3>
							<p className='text-sm text-dark-100 font-normal font-archivo'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Quisque.
							</p>
						</div>
						<Button
							onClick={() =>
								router.push("/collaboration/sedher-synergi/gideon/create")
							}>
							Add Patient Details
						</Button>
					</div>
				</WhiteWrapper>
				<WhiteWrapper>
					<div className='space-y-4'>
						<h3 className='font-semibold text-lg font-archivo text-[#101C1D]'>
							Summary
						</h3>
						<FormProvider {...methods}>
							<Input
								label='Description'
								type='text'
								placeholder='This is placeholder'
							/>
						</FormProvider>
					</div>
				</WhiteWrapper>
				<WhiteWrapper>
					<div>
						<div className='flex justify-end mb-3'>
							<img src='/assets/icons/delete.svg' alt='delete' title='delete' />
						</div>
						<h3 className='font-semibold text-lg font-archivo text-[#101C1D]'>
							Patient Details
						</h3>
						<div className='flex justify-between pt-6 space-x-12'>
							<FormProvider {...methods}>
								<div className='w-1/2'>
									<Input label='First name' placeholder='This is placeholder' />
								</div>

								<div className='w-1/2'>
									<Input label='Last  name' placeholder='This is placeholder' />
								</div>
							</FormProvider>
						</div>
						<div className='flex justify-between pt-6 space-x-12'>
							<FormProvider {...methods}>
								<div className='w-1/2'>
									<Input label='Gender' placeholder='This is placeholder' />
								</div>

								<div className='w-1/2'>
									<Input label='Age' placeholder='This is placeholder' />
								</div>
							</FormProvider>
						</div>
						<div className='flex justify-between pt-6 space-x-12'>
							<FormProvider {...methods}>
								<div className='w-1/2'>
									<Input label='Condition' placeholder='This is placeholder' />
								</div>

								<div className='w-1/2'>
									<Input label='Attach image' type='file' />
								</div>
							</FormProvider>
						</div>
					</div>
				</WhiteWrapper>
				<WhiteWrapper>
					<div>
						<div className='flex justify-end mb-3'>
							<img src='/assets/icons/delete.svg' alt='delete' title='delete' />
						</div>
						<h3 className='font-semibold text-lg font-archivo text-[#101C1D]'>
							Patient Details
						</h3>
						<div className='flex justify-between pt-6 space-x-12'>
							<FormProvider {...methods}>
								<div className='w-1/2'>
									<Input label='First name' placeholder='This is placeholder' />
								</div>

								<div className='w-1/2'>
									<Input label='Last  name' placeholder='This is placeholder' />
								</div>
							</FormProvider>
						</div>
						<div className='flex justify-between pt-6 space-x-12'>
							<FormProvider {...methods}>
								<div className='w-1/2'>
									<Input label='Gender' placeholder='This is placeholder' />
								</div>

								<div className='w-1/2'>
									<Input label='Age' placeholder='This is placeholder' />
								</div>
							</FormProvider>
						</div>
						<div className='flex justify-between pt-6 space-x-12'>
							<FormProvider {...methods}>
								<div className='w-1/2'>
									<Input label='Condition' placeholder='This is placeholder' />
								</div>

								<div className='w-1/2'>
									<Input label='Attach image' type='file' />
								</div>
							</FormProvider>
						</div>
					</div>
				</WhiteWrapper>
				<div className='flex justify-between !mt-[47px]'>
					<Button onClick={() => router.back()} theme='outline'>
						Back
					</Button>
					<Button
						onClick={() =>
							router.push("/collaboration/sedher-synergi/gideon/create")
						}>
						Create a new Booking Page
					</Button>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default Create;
export const getServerSideProps: GetServerSideProps = requireAuthentication(
	async (context) => {
		return {
			props: {
				customers: [],
			},
		};
	}
);
